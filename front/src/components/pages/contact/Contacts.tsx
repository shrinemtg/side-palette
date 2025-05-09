import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// 型定義
interface FormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

interface ModalContentProps {
  $isOpen: boolean
}

const Contacts: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showThanksModal, setShowThanksModal] = useState(false)
  const [privacyChecked, setPrivacyChecked] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmModal(true)
  }

  const handleConfirmSubmit = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'エラーの詳細を取得できませんでした' }))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (data.success) {
        setShowConfirmModal(false)
        setShowThanksModal(true)
      } else {
        throw new Error(data.message || '送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : '送信に失敗しました。もう一度お試しください。')
    }
  }

  if (!isMounted) return null

  return (
    <>
      <ContactContainer>
        {/* ヘッダーセクション */}
        <PageTitle>Contact</PageTitle>
        <HeroSection>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <LeadText>
              ご質問、お見積もり、ご相談等、お気軽にお問い合わせください。
              <br />
              <br />
              お問い合わせには、営業時間にもよりますが、 通常24時間以内に担当者よりご連絡いたします。
              <br />
              <br />
              なお、チャットやお電話でのご相談をご希望の場合は、公式LINEをご利用ください。
              <br />
              下記リンクよりお友達追加をお願いいたします。
            </LeadText>
          </motion.div>
        </HeroSection>

        {/* 公式LINEセクション */}
        <SectionTitle>公式LINE</SectionTitle>
        <BookingSection>
          <BookingDescription>
            Side Palette公式LINEでは、
            <br />
            お電話やチャットでのご質問、
            <br />
            ご相談、お見積もりがスムーズに行えます。
            <br />
            <br />
            さらに、LINE友だち限定の
            <br />
            お得な情報もお届けします。
            <br />
            <br />
            ぜひ、公式LINEアカウントへの
            <br />
            ご登録をお願いいたします！
            <br />
            <br />
            どんな些細なことでも、お気軽にご相談ください。
          </BookingDescription>
          <LineButtonContainer>
            <CustomLineButton href='/contact/line-qr'>
              <Image
                width={24}
                height={24}
                src='https://img.icons8.com/forma-thin-filled-sharp/24/FFFFFF/line-me.png'
                alt='line-me'
              />
              友だち追加
            </CustomLineButton>
          </LineButtonContainer>
        </BookingSection>

        {/* フォームセクション */}
        <FormTitle>メールでのお問い合わせ</FormTitle>
        <FormSection>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='name'>
                お名前 <Required>*</Required>
              </Label>
              <Input
                id='name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='山田 太郎'
                required
                autoComplete='name'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='email'>
                メールアドレス <Required>*</Required>
              </Label>
              <Input
                id='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='example@email.com'
                required
                autoComplete='email'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='phone'>電話番号</Label>
              <Input
                id='phone'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                placeholder='090-1234-5678'
                autoComplete='tel'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='company'>会社名</Label>
              <Input
                id='company'
                type='text'
                name='company'
                value={formData.company}
                onChange={handleInputChange}
                placeholder='株式会社サンプル'
                autoComplete='organization'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='message'>
                メッセージ <Required>*</Required>
              </Label>
              <Textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='お問い合わせ内容をご記入ください'
                rows={6}
                required
                autoComplete='off'
              />
            </FormGroup>
            <PrivacyCheck>
              <input
                id='privacy'
                type='checkbox'
                checked={privacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
                required
              />
              <Label htmlFor='privacy'>プライバシーポリシーに同意する</Label>
            </PrivacyCheck>
            <SubmitButton type='submit' disabled={!privacyChecked}>
              確認画面へ
            </SubmitButton>
          </ContactForm>
        </FormSection>

        {/* FAQセクション */}
        <FAQSection>
          <QATitle>よくあるご質問</QATitle>
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
      <AnimatePresence mode='wait'>
        {showConfirmModal && isMounted && (
          <ModalOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ModalContent
              $isOpen={showConfirmModal}
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
                <BackButton type='button' onClick={() => setShowConfirmModal(false)}>
                  修正する
                </BackButton>
                <SubmitButton as='button' type='button' onClick={handleConfirmSubmit}>
                  送信する
                </SubmitButton>
              </ModalButtons>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {/* サンクスモーダル */}
      <AnimatePresence mode='wait'>
        {showThanksModal && isMounted && (
          <ModalOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ModalContent
              $isOpen={showThanksModal}
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
                <ActionButton href='/'>ホームに戻る</ActionButton>
                <ActionButton href='/service'>サービス一覧を見る</ActionButton>
              </ModalButtons>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  )
}

// --- styled-components（ファイル下部に配置） ---

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroSection = styled.section`
  width: 100%;
  position: relative;
  margin: 0 auto 4rem;
  padding: 1rem;
  max-width: 800px;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    rgba(255, 133, 202, 0.2) 0%,
    rgba(193, 151, 255, 0.2) 50%,
    rgba(133, 234, 255, 0.2) 70%,
    rgba(177, 227, 59, 0.2) 90%,
    rgba(243, 188, 22, 0.2) 100%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

const PageTitle = styled.h1`
  color: #333;
  text-align: center;
  font-size: 2.5rem;
  position: relative;
  margin: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
`

const LeadText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 2.2;
  font-weight: 500;
  letter-spacing: 0.02em;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 0 0 1.5rem 0;
  color: #333;
  position: relative;
  padding: 0 0 0.5rem 0;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 2rem 0;
    padding: 0 0 0.3rem 0;
     &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
`

const BookingSection = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 4rem;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const BookingDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const LineButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`

const CustomLineButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`

const FormTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0 0 1.5rem 0;
  color: #333;
  position: relative;
  padding: 0 0 0.5rem 0;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0 0 2rem 0;
    padding: 0 0 0.3rem 0;
      &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
`

const FormSection = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 4rem;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Required = styled.span`
  color: #ff4d4d;
  font-size: 0.8rem;
`

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
`

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
`

const PrivacyCheck = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  input {
    width: 1.2rem;
    height: 1.2rem;
  }
  span,
  label {
    color: #666;
  }
`

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor:
    url('/images/hude.svg') 0 20,
    pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const FAQSection = styled.section`
  margin-top: 4rem;
`

const QATitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0 0 1.5rem 0;
  color: #333;
  position: relative;
  padding: 0 0 0.5rem 0;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 230px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0 0 2rem 0;
    padding: 0 0 0.3rem 0;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 3px;
      background: linear-gradient(
        90deg,
        rgba(255, 133, 202, 0.5) 0%,
        rgba(193, 151, 255, 0.5) 50%,
        rgba(133, 234, 255, 0.5) 70%,
        rgba(177, 227, 59, 0.5) 90%,
        rgba(243, 188, 22, 0.5) 100%
      );
    }
  }
`

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FAQItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const FAQQuestion = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  &::before {
    content: 'Q. ';
    color: #ff85ca;
    font-weight: bold;
  }
`

const FAQAnswer = styled.p`
  color: #666;
  line-height: 1.6;
  &::before {
    content: 'A. ';
    color: #85eaff;
    font-weight: bold;
  }
`

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
`

const ModalContent = styled(motion.div)<ModalContentProps>`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) => (props.$isOpen ? 'scale(1)' : 'scale(0.8)')};
  transition: all 0.3s ease;
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`

const ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ConfirmItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
`

const ConfirmLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`

const ConfirmValue = styled.div`
  color: #333;
`

const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`

const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #e5e7eb;
  color: #333;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor:
    url('/images/hude.svg') 0 20,
    pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: #d1d5db;
  }
`

const ActionButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  cursor:
    url('/images/hude.svg') 0 20,
    pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
`

const ThanksMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.8;
`

// FAQデータ
const faqs = [
  {
    question: '返信までどのくらいかかりますか？',
    answer: '通常24時間以内にご返信いたします。お急ぎの場合は、お電話でのお問い合わせもご検討ください。',
  },
  {
    question: '見積もりは無料ですか？',
    answer: 'はい、初回のお見積もりは無料で承っております。お気軽にご相談ください。',
  },
  {
    question: '対応可能な地域を教えてください',
    answer: 'オンラインでの対応が可能なため、日本全国どこからでもご依頼いただけます。',
  },
  {
    question: '支払方法について教えてください',
    answer: '銀行振込、クレジットカード、でのお支払いに対応しております。',
  },
]

export default Contacts
