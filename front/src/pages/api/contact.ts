import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { Client } from '@notionhq/client'

// Notionクライアントの初期化
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

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
    rejectUnauthorized: false,
  },
})

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

${
  data.phone
    ? `【電話番号】
${data.phone}

`
    : ''
}${
      data.company
        ? `【会社名】
${data.company}

`
        : ''
    }【お問い合わせ内容】
${data.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

営業時間外を除き、24時間以内に担当者よりご連絡させていただきます。

※このメールは自動送信されています。
返信はお控えください。

--
Side Palette
`,
  }
  await transporter.sendMail(mailOptions)
}

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

${
  data.phone
    ? `【電話番号】
${data.phone}

`
    : ''
}${
      data.company
        ? `【会社名】
${data.company}

`
        : ''
    }【お問い合わせ内容】
${data.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`,
  }
  await transporter.sendMail(mailOptions)
}

// Notionにデータを保存
const saveToNotion = async (data: any) => {
  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID || '',
    },
    properties: {
      お名前: {
        title: [
          {
            text: {
              content: data.name || '',
            },
          },
        ],
      },
      メールアドレス: {
        email: data.email || '',
      },
      電話番号: {
        phone_number: data.phone || '',
      },
      会社名: {
        rich_text: [
          {
            text: {
              content: data.company || '',
            },
          },
        ],
      },
      問い合わせ内容: {
        rich_text: [
          {
            text: {
              content: data.message || '',
            },
          },
        ],
      },
      ステータス: {
        status: {
          name: '未対応',
        },
      },
      受付日時: {
        date: {
          start: new Date().toISOString(),
        },
      },
    },
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }

  const formData = req.body

  // 必須フィールドの検証
  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).json({
      success: false,
      message: '必須フィールドが不足しています',
    })
  }

  try {
    // ユーザーへの確認メール送信
    try {
      await sendUserConfirmationEmail(formData)
    } catch (emailError) {
      // メール送信エラーは全体の処理を中断しない
    }

    // 管理者への通知メール送信
    try {
      await sendAdminNotificationEmail(formData)
    } catch (emailError) {
      // エラー時も処理を継続するため何もしない
    }

    // Notionにデータを保存
    try {
      await saveToNotion(formData)
    } catch (notionError) {
      throw new Error('Notionへのデータ保存に失敗しました')
    }

    return res.status(200).json({
      message: 'お問い合わせを受け付けました',
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : 'エラーが発生しました',
      success: false,
    })
  }
}
