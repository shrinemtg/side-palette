import styled from 'styled-components';
import { Klee_One } from 'next/font/google';

const kleeOne = Klee_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const OrderProcess = () => {
  return (
    <Container>
      <Title>ご注文の流れ</Title>
      <ProcessContainer>
        <Section>
          <StepNumber>0</StepNumber>
          <StepTitle>お問い合わせ</StepTitle>
          <StepDescription>
            ご質問やご相談やお見積もりなど無料で行っておりますので
            当サイトContactページよりご連絡いただくか
            お気軽にお問い合わせください。
          </StepDescription>
        </Section>

        <Section>
          <StepNumber>1</StepNumber>
          <StepTitle>ヒアリング</StepTitle>
          <StepDescription>
            メールまたは公式LINEにて
            ご希望のお日にちやご予算をご予約をとっていただき
            ご予約日当日、公式LINEのお電話にて
            お客様のご要望や詳しい内容について
            お伺いいたします
          </StepDescription>
        </Section>

        <Section>
          <StepNumber>2</StepNumber>
          <StepTitle>ご提案</StepTitle>
          <StepDescription>
            ヒアリングに合ったデザイン・イラストの構成案を作成し、
            ご提案させていただきます。
            <Note>
              ※ご提案以降の修正は1回無料
              2回目以降別途料金がかかりますのでご了承下さい
            </Note>
          </StepDescription>
        </Section>

        <Section>
          <StepNumber>3</StepNumber>
          <StepTitle>お支払い</StepTitle>
          <StepDescription>
            ご提案させていただいた内容にご納得いただけたら
            お見積もりした料金を制作前にお支払いいただきます。
          </StepDescription>
        </Section>

        <Section>
          <StepNumber>4</StepNumber>
          <StepTitle>制作</StepTitle>
          <StepDescription>
            お支払い確認次第、制作の方に移らせていただきます。
            <Note>
              ※デザインは制作後の大幅な修正、
              イラストは修正自体が出来ませんのでご了承ください。
            </Note>
          </StepDescription>
        </Section>

        <Section>
          <StepNumber>5</StepNumber>
          <StepTitle>納品</StepTitle>
          <StepDescription>
            出来上がった完成品をご確認いただいた後
            納品させていただきます。
          </StepDescription>
        </Section>
      </ProcessContainer>
    </Container>
  );
};

export default OrderProcess;

const Container = styled.div`
  max-width: 800px;
  margin: 5rem auto;
  padding: 2rem;
  font-family: ${kleeOne.style.fontFamily};
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  font-size: 2.5rem;
  position: relative;
  margin-bottom: 3rem;
  font-family: ${kleeOne.style.fontFamily};
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
    background: linear-gradient(90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
`;

const ProcessContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  font-family: ${kleeOne.style.fontFamily};
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #666;
  margin-left: 2rem;
  white-space: pre-line;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
`;

const Note = styled.p`
  font-size: 0.9rem;
  color: #FF6B6B;
  margin-top: 1rem;
  font-style: italic;
  white-space: pre-line;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
`;
