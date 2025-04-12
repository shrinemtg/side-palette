import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

// Notionクライアントの初期化
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// メール送信の設定
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// ユーザーへの確認メールを送信
const sendUserConfirmationEmail = async (data: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: '【Side Palette】お問い合わせありがとうございます',
    text: `
${data.name} 様

お問い合わせありがとうございます。
以下の内容で承りました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お名前】
${data.name}

【メールアドレス】
${data.email}

${data.phone ? `【電話番号】
${data.phone}

` : ''}${data.company ? `【会社名】
${data.company}

` : ''}【お問い合わせ内容】
${data.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

営業時間外を除き、24時間以内に担当者よりご連絡させていただきます。

※このメールは自動送信されています。
返信はお控えください。

--
Side Palette
`,
  };

  await transporter.sendMail(mailOptions);
};

// 管理者への通知メールを送信
const sendAdminNotificationEmail = async (data: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: '【Side Palette】新規お問い合わせ',
    text: `
新しいお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お名前】
${data.name}

【メールアドレス】
${data.email}

${data.phone ? `【電話番号】
${data.phone}

` : ''}${data.company ? `【会社名】
${data.company}

` : ''}【お問い合わせ内容】
${data.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`,
  };

  await transporter.sendMail(mailOptions);
};

// Notionにデータを保存
const saveToNotion = async (data: any) => {
  try {
    console.log('Attempting to save to Notion with database ID:', process.env.NOTION_DATABASE_ID);
    console.log('Form data:', JSON.stringify(data, null, 2));

    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID || '',
      },
      properties: {
        "お名前": {
          title: [
            {
              text: {
                content: data.name || '',
              },
            },
          ],
        },
        "メールアドレス": {
          email: data.email || '',
        },
        "電話番号": {
          phone_number: data.phone || '',
        },
        "会社名": {
          rich_text: [
            {
              text: {
                content: data.company || '',
              },
            },
          ],
        },
        "問い合わせ内容": {
          rich_text: [
            {
              text: {
                content: data.message || '',
              },
            },
          ],
        },
        "ステータス": {
          status: {
            name: "未対応"
          }
        },
        "受付日時": {
          date: {
            start: new Date().toISOString()
          }
        }
      }
    });
    console.log('Successfully saved to Notion. Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error saving to Notion:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    }
    throw new Error('Notionへのデータ保存に失敗しました: ' + (error instanceof Error ? error.message : String(error)));
  }
};

export const handleContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const formData = req.body;
    console.log('Received form data:', JSON.stringify(formData, null, 2));

    // 必須フィールドの検証
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Missing required fields:', {
        name: !!formData.name,
        email: !!formData.email,
        message: !!formData.message
      });
      res.status(400).json({
        success: false,
        message: '必須フィールドが不足しています'
      });
      return;
    }

    // ユーザーへの確認メール送信
    try {
      console.log('Attempting to send user confirmation email...');
      console.log('Email configuration:', {
        host: 'smtp.gmail.com',
        port: 465,
        user: process.env.EMAIL_USER,
      });
      await sendUserConfirmationEmail(formData);
      console.log('User confirmation email sent successfully');
    } catch (emailError) {
      console.error('Error sending user confirmation email:', emailError);
      if (emailError instanceof Error) {
        console.error('Error details:', {
          message: emailError.message,
          stack: emailError.stack,
        });
      }
      // メール送信エラーは全体の処理を中断しない
      console.log('Continuing despite email error');
    }

    // 管理者への通知メール送信
    try {
      console.log('Attempting to send admin notification email...');
      await sendAdminNotificationEmail(formData);
      console.log('Admin notification email sent successfully');
    } catch (emailError) {
      console.error('Error sending admin notification email:', emailError);
      // メール送信エラーは全体の処理を中断しない
      console.log('Continuing despite admin email error');
    }

    // Notionにデータを保存
    try {
      console.log('Attempting to save data to Notion...');
      console.log('Notion configuration:', {
        apiKey: process.env.NOTION_API_KEY ? '設定済み' : '未設定',
        databaseId: process.env.NOTION_DATABASE_ID,
      });
      await saveToNotion(formData);
      console.log('Data saved to Notion successfully');
    } catch (notionError) {
      console.error('Error saving to Notion:', notionError);
      if (notionError instanceof Error) {
        console.error('Error details:', {
          message: notionError.message,
          stack: notionError.stack,
        });
      }
      throw new Error('Notionへのデータ保存に失敗しました');
    }

    res.status(200).json({
      message: 'お問い合わせを受け付けました',
      success: true,
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      });
    }
    res.status(500).json({
      message: error instanceof Error ? error.message : 'エラーが発生しました',
      success: false,
    });
  }
};