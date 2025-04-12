import styled from 'styled-components';

const OrderProcess = () => {
  return (
    <Container>
      <Title>ご注文の流れ</Title>
      <ProcessContainer>
        {orderSteps.map((step) => (
          <Section key={step.number}>
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>
              <DescriptionText>{step.description}</DescriptionText>
              {step.note && <Note>{step.note}</Note>}
            </StepDescription>
          </Section>
        ))}
      </ProcessContainer>
    </Container>
  );
};

const orderSteps = [
  {
    number: 0,
    title: 'お問い合わせ',
    description: 'ご質問やご相談やお見積もりなど無料で行っておりますので\n当サイトContactページよりご連絡いただくか\nお気軽にお問い合わせください。'
  },
  {
    number: 1,
    title: 'ヒアリング',
    description: 'メールまたは公式LINEにて\nご希望のお日にちやご予算をご予約をとっていただき\nご予約日当日、公式LINEのお電話にて\nお客様のご要望や詳しい内容について\nお伺いいたします'
  },
  {
    number: 2,
    title: 'ご提案',
    description: 'ヒアリングに合ったデザイン・イラストの構成案を作成し、\nご提案させていただきます。',
    note: '※ご提案以降の修正は1回無料\n2回目以降別途料金がかかりますのでご了承下さい'
  },
  {
    number: 3,
    title: 'お支払い',
    description: 'ご提案させていただいた内容にご納得いただけたら\nお見積もりした料金を制作前にお支払いいただきます。'
  },
  {
    number: 4,
    title: '制作',
    description: 'お支払い確認次第、制作の方に移らせていただきます。',
    note: '※デザインは制作後の大幅な修正、\nイラストは修正自体が出来ませんのでご了承ください。'
  },
  {
    number: 5,
    title: '納品',
    description: '出来上がった完成品をご確認いただいた後\n納品させていただきます。'
  }
];

const Container = styled.div`
  max-width: 800px;
  margin: 5rem auto;
  padding: 2rem;
  font-family: 'Klee One', sans-serif;
`;

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
`;

const ProcessContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const StepNumber = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FF85CA;
  margin-right: 1rem;
`;

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
`;

const StepDescription = styled.div`
  font-size: 1rem;
  line-height: 2;
  color: #666;
  margin-left: 2rem;
  white-space: pre-line;
  font-family: 'Klee One', sans-serif;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`;

const DescriptionText = styled.p`
  margin: 0;
`;

const Note = styled.div`
  font-size: 0.9rem;
  color: #FF6B6B;
  margin-top: 1rem;
  font-style: italic;
  white-space: pre-line;
  font-family: 'Klee One', sans-serif;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default OrderProcess;
