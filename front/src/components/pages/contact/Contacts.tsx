import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showThanksModal, setShowThanksModal] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = () => {
    // ここで実際の送信処理を実装
    setShowConfirmModal(false);
    setShowThanksModal(true);
  };

  return (
    <>
      <ContactContainer>
        {/* ヘッダーセクション */}
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>Contact</PageTitle>
            <LeadText>
              お客様のご要望をお聞かせください。<br />
              24時間以内に担当者よりご連絡させていただきます。
            </LeadText>
          </motion.div>
        </HeroSection>

        {/* フォームセクション */}
        <FormSection>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label>お名前 <Required>*</Required></Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="山田 太郎"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>メールアドレス <Required>*</Required></Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>電話番号</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="090-1234-5678"
              />
            </FormGroup>

            <FormGroup>
              <Label>会社名</Label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="株式会社サンプル"
              />
            </FormGroup>

            <FormGroup>
              <Label>メッセージ <Required>*</Required></Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="お問い合わせ内容をご記入ください"
                rows={6}
                required
              />
            </FormGroup>

            <PrivacyCheck>
              <input
                type="checkbox"
                checked={privacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
                required
              />
              <span>プライバシーポリシーに同意する</span>
            </PrivacyCheck>

            <SubmitButton type="submit" disabled={!privacyChecked}>
              確認画面へ
            </SubmitButton>
          </ContactForm>
        </FormSection>

        {/* FAQセクション */}
        <FAQSection>
          <SectionTitle>よくあるご質問</SectionTitle>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion>{faq.question}</FAQQuestion>
                <FAQAnswer>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>
      </ContactContainer>

      {/* 確認モーダル */}
      <AnimatePresence>
        {showConfirmModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <ModalTitle>入力内容の確認</ModalTitle>
              <ConfirmContent>
                <ConfirmItem>
                  <ConfirmLabel>お名前</ConfirmLabel>
                  <ConfirmValue>{formData.name}</ConfirmValue>
                </ConfirmItem>
                <ConfirmItem>
                  <ConfirmLabel>メールアドレス</ConfirmLabel>
                  <ConfirmValue>{formData.email}</ConfirmValue>
                </ConfirmItem>
                {formData.phone && (
                  <ConfirmItem>
                    <ConfirmLabel>電話番号</ConfirmLabel>
                    <ConfirmValue>{formData.phone}</ConfirmValue>
                  </ConfirmItem>
                )}
                {formData.company && (
                  <ConfirmItem>
                    <ConfirmLabel>会社名</ConfirmLabel>
                    <ConfirmValue>{formData.company}</ConfirmValue>
                  </ConfirmItem>
                )}
                <ConfirmItem>
                  <ConfirmLabel>メッセージ</ConfirmLabel>
                  <ConfirmValue>{formData.message}</ConfirmValue>
                </ConfirmItem>
              </ConfirmContent>
              <ModalButtons>
                <BackButton onClick={() => setShowConfirmModal(false)}>
                  修正する
                </BackButton>
                <SubmitButton onClick={handleConfirmSubmit}>
                  送信する
                </SubmitButton>
              </ModalButtons>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {/* サンクスモーダル */}
      <AnimatePresence>
        {showThanksModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <ThanksMessage>
                お問い合わせありがとうございます。
                <br />
                24時間以内に担当者よりご連絡させていただきます。
              </ThanksMessage>
              <ModalButtons>
                <ActionButton href="/">
                  ホームに戻る
                </ActionButton>
                <ActionButton href="/service">
                  サービス一覧を見る
                </ActionButton>
              </ModalButtons>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

// スタイルコンポーネント
const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  text-align: center;
  max-width: 800px;
  padding: 4rem 0;
  background: linear-gradient(120deg,
    rgba(255, 133, 202, 0.1) 0%,
    rgba(193, 151, 255, 0.1) 50%,
    rgba(133, 234, 255, 0.1) 100%
  );
  border-radius: 20px;
  width: 100%;
  margin: 4rem auto;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg,
    #ff85ca 0%,
    #c197ff 50%,
    #85eaff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;

const LeadText = styled.p`
  font-size: 1.5rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const FormSection = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Required = styled.span`
  color: #ff4d4d;
  font-size: 0.8rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #c197ff;
    box-shadow: 0 0 0 2px rgba(193, 151, 255, 0.2);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #c197ff;
    box-shadow: 0 0 0 2px rgba(193, 151, 255, 0.2);
  }
`;

const PrivacyCheck = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input {
    width: 1.2rem;
    height: 1.2rem;
  }

  span {
    color: #666;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const FAQSection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;

  &::before {
    content: "Q. ";
    color: #ff85ca;
    font-weight: bold;
  }
`;

const FAQAnswer = styled.p`
  color: #666;
  line-height: 1.6;

  &::before {
    content: "A. ";
    color: #85eaff;
    font-weight: bold;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ConfirmItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

const ConfirmLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const ConfirmValue = styled.div`
  color: #333;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #e5e7eb;
  color: #333;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #d1d5db;
  }
`;

const ActionButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ThanksMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

// FAQデータ
const faqs = [
  {
    question: "返信までどのくらいかかりますか？",
    answer: "通常24時間以内にご返信いたします。お急ぎの場合は、お電話でのお問い合わせもご検討ください。"
  },
  {
    question: "見積もりは無料ですか？",
    answer: "はい、初回のお見積もりは無料で承っております。お気軽にご相談ください。"
  },
  {
    question: "対応可能な地域を教えてください",
    answer: "オンラインでの対応が可能なため、日本全国どこからでもご依頼いただけます。"
  },
  {
    question: "支払方法について教えてください",
    answer: "銀行振込、クレジットカード、PayPalでのお支払いに対応しております。"
  }
];

export default Contacts;