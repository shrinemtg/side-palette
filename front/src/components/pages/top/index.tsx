import styled from 'styled-components';
import HeroSection from './Hero';
import About from './About';
import News from './News';
import ShortContacts from '../contact/Short-Contacts';
import PickUp from '../pick-up/PickUp';

const Top = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <PickUp />
      <News newsItems={newsItems} />
      <ShortContacts  />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const newsItems = [
  {
      date: "2024.03.15",
      title: "新規サービス「Webデザインサブスクリプション」開始",
      description: "月額制でWebデザインサービスを提供する新プランを開始しました。"
  },
  {
      date: "2024.02.28",
      title: "ポートフォリオサイトをリニューアル",
      description: "より見やすく、使いやすいデザインに更新しました。"
  },
  {
      date: "2024.01.10",
      title: "クリエイティブワークショップ開催",
      description: "デザインの基礎から実践まで学べるワークショップを開催しました。"
  }
];

export default Top;
