import styled from 'styled-components'
import React from 'react'

// 型定義
interface OrderStep {
  number: number
  title: string
  description: (string | JSX.Element)[]
  note?: string[]
}

const orderSteps: OrderStep[] = [
  {
    number: 0,
    title: 'お問い合わせ',
    description: [
      <>
        ご質問、ご相談、お見積もりは
        <span className='only-mobile'>
          <br />
        </span>
        すべて無料です。
      </>,
      'どうぞお気軽に、当サイトのContactページまたは公式LINEからご連絡ください。',
    ],
  },
  {
    number: 1,
    title: 'ヒアリング',
    description: [
      'ご予約はメールまたは公式LINEにて承ります。',
      'ご希望のお日にち、ご予算などをお知らせください。',
      'ご予約日となりましたら、公式LINEの音声通話にて、お客様のご要望や詳しい内容を詳しくお伺いいたします。',
    ],
  },
  {
    number: 2,
    title: 'ご提案',
    description: ['ヒアリングした内容を踏まえ、デザイン・イラストの構成案を作成し、ご提案させていただきます。'],
    note: ['※ご提案以降の修正は1回無料', '2回目以降別途料金がかかりますのでご了承下さい'],
  },
  {
    number: 3,
    title: 'お支払い',
    description: ['ご提案内容にご納得いただけましたら、制作開始前にお見積もり料金のお支払いをお願いいたします。'],
  },
  {
    number: 4,
    title: '制作',
    description: ['お支払いの確認が取れ次第、制作作業に着手させていただきます。'],
    note: [
      '※ 制作後の修正について',
      '・デザインは制作開始後の大幅な修正は、原則として承りかねます。',
      '・イラストは性質上、制作後の修正ができませんので、あらかじめご了承ください。',
    ],
  },
  {
    number: 5,
    title: '納品',
    description: ['完成品をご確認いただいた後', '納品させていただきます。'],
  },
]

const OrderProcess: React.FC = React.memo(() => {
  return (
    <Container>
      <Title>ご注文の流れ</Title>
      <ProcessContainer>
        {orderSteps.map((step) => (
          <Section key={step.number}>
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>
              {step.description.map((line, idx) => {
                if (step.number === 4 && line === 'お支払いの確認が取れ次第、制作作業に着手させていただきます。') {
                  return (
                    <DescriptionText key={idx}>
                      {'お支払いの確認が取れ次第、'}
                      <span className='only-mobile-br'>
                        <br />
                      </span>
                      {'制作作業に着手させていただきます。'}
                    </DescriptionText>
                  )
                }
                return <DescriptionText key={idx}>{line}</DescriptionText>
              })}
              {step.note && step.note.map((noteLine, idx) => <Note key={idx}>{noteLine}</Note>)}
            </StepDescription>
          </Section>
        ))}
      </ProcessContainer>
    </Container>
  )
})

OrderProcess.displayName = 'OrderProcess'

const Container = styled.div`
  max-width: 800px;
  margin: 5rem auto;
  padding: 2rem;
  font-family: 'Klee One', sans-serif;
`

const Title = styled.h1`
  color: #333;
  text-align: center;
  font-size: 2.5rem;
  position: relative;
  margin-bottom: 3rem;
  font-family: 'Klee One', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 11rem;
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
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const ProcessContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const Section = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`

const StepNumber = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff85ca;
  margin-right: 1rem;
`

const StepTitle = styled.h2`
  display: inline-block;
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Klee One', sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const StepDescription = styled.div`
  font-size: 1rem;
  line-height: 2;
  color: #666;
  margin-left: 2rem;
  font-family: 'Klee One', sans-serif;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`

const DescriptionText = styled.p`
  margin: 0 0 1rem 0;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    line-height: 1.8;
    font-size: 0.95rem;
  }
  .only-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    .only-mobile {
      display: inline;
    }
  }
  .only-mobile-br {
    display: none;
  }
  @media (max-width: 768px) {
    .only-mobile-br {
      display: inline;
    }
  }
`

const Note = styled.div`
  font-size: 0.9rem;
  color: #ff6b6b;
  margin-top: 1rem;
  font-style: italic;
  font-family: 'Klee One', sans-serif;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export default OrderProcess
