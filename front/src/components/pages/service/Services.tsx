import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Klee_One } from 'next/font/google';

interface ServiceCardProps {
  $isActive: boolean;
}

const kleeOne = Klee_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  images: string[];
  content: {
    mainText: string;
    price: string;
    process: string[];
  };
}

const services: ServiceItem[] = [
  {
    title: '絵馬デザイン',
    description: '神社仏閣の伝統と現代のデザインを融合させた、オリジナルの絵馬を制作いたします。',
    imageUrl: '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-01.png',
    images: [
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-01.png',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-02.jpg',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-01.png',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-02.jpg',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-03.jpg',
      '/portfolios/eto-ema-taishido/taishido-eto-ema-mi-01.jpg',
      '/portfolios/eto-ema-taishido/taishido-kigan-ema-01.jpg',
    ],
    content: {
      mainText: 'side paletteでは、神社や寺院向けの絵馬デザインを手掛けています。伝統的な要素を大切にしつつ、現代的なデザインを取り入れることで、若い世代にも親しみやすい絵馬を制作します。\n\nデジタルデザインからアナログの大絵馬まで、幅広いサイズやスタイルに対応。特に、大絵馬の制作では、6畳分の大きさのベニア板に干支やモチーフを描き、神社やイベントのシンボルとして多くの人に愛される作品を生み出します。\n\nあなたの神社やイベントを彩る、オリジナルの絵馬デザインを一緒に作りましょう。',
      price: 'サイズやデザインの複雑さによって料金が変動します。\n・小サイズ（A4程度）: 15,000円〜\n・中サイズ（A3程度）: 30,000円〜\n・大サイズ（6畳程度）: 500,000円〜',
      process: [
        'ヒアリング：ご要望や用途について詳しくお伺いします',
        'デザイン案の作成：複数のデザイン案を提案します',
        'デザインの確定：お気に入りのデザインを選んでいただきます',
        '制作：選定されたデザインを制作します',
        '納品：完成した作品をお届けします'
      ]
    }
  },
  {
    title: 'ロゴデザイン',
    description: 'ブランドの顔となるロゴをデザイン',
    imageUrl: '/portfolios/rogo-design/keyakidokoro-01.jpg',
    images: ['/portfolios/rogo-design/keyakidokoro-01.jpg'],
    content: {
      mainText: 'ロゴは、企業やブランドの顔となる重要な要素です。side paletteでは、クライアントの理念やターゲット層を徹底的に分析し、その企業やブランドに最適なロゴデザインを提案します。\n\nシンプルで印象的なデザインから、個性的で独創的なデザインまで、幅広いニーズに対応。ロゴを通じて、ブランドの魅力を最大限に引き出します。\n\nあなたのビジネスを象徴するロゴを、一緒に作り上げましょう。',
      price: 'ロゴの種類や用途によって料金が変動します。\n・シンプルロゴ: 50,000円〜\n・ブランドロゴ: 100,000円〜\n・企業ロゴ: 200,000円〜',
      process: [
        'ヒアリング：企業理念やターゲット層について詳しくお伺いします',
        'コンセプトの作成：ブランドの方向性を決定します',
        'デザイン案の作成：複数のデザイン案を提案します',
        'デザインの確定：お気に入りのデザインを選んでいただきます',
        'データの納品：各種フォーマットでデータをお届けします'
      ]
    }
  },
  {
    title: 'ウェルカムボード',
    description: 'お客様をお迎えする最初の印象を彩る、温かみのあるウェルカムボードを制作いたします。',
    imageUrl: '/portfolios/welcome-board/welcome-board-01.jpg',
    images: [
      '/portfolios/welcome-board/welcome-board-01.jpg'
    ],
    content: {
      mainText: '結婚式は、新郎新婦にとって一生に一度の特別な日。side paletteでは、そんな特別な一日を彩るウェルカムボードをデザインします。\n\n新郎新婦の個性やストーリーを反映したデザインで、ゲストをもてなす最初の印象を大切にします。温かみのある手描き風デザインから、モダンで洗練されたデザインまで、ご要望に合わせて制作します。\n\nあなたの結婚式を、より思い出深いものにしましょう。',
      price: 'サイズやデザインの複雑さによって料金が変動します。\n・A3サイズ: 20,000円〜\n・A2サイズ: 30,000円〜\n・特大サイズ: 50,000円〜',
      process: [
        'ヒアリング：結婚式のテーマやご要望について詳しくお伺いします',
        'デザイン案の作成：複数のデザイン案を提案します',
        'デザインの確定：お気に入りのデザインを選んでいただきます',
        '制作：選定されたデザインを制作します',
        '納品：完成した作品をお届けします'
      ]
    }
  },
  {
    title: 'オーダーイラスト',
    description: 'お客様のご要望に合わせた、オリジナルのイラストを制作いたします。',
    imageUrl: '/portfolios/order-illust/order-illust-01.jpg',
    images: [
      '/portfolios/order-illust/order-illust-01.jpg',
      '/portfolios/order-illust/order-illust-02.jpg',
    ],
    content: {
      mainText: 'side paletteでは、クライアントの要望に合わせた完全オリジナルのオーダーイラストを制作します。\n\n家族や友人、ペットの似顔絵、思い出の風景、ビジネス用のイラストなど、さまざまなシーンで活用できるイラストを提供します。\n\nあなたの想いやストーリーを丁寧にヒアリングし、それを形にするためのデザインを提案。温かみのあるタッチから、モダンで洗練されたスタイルまで、幅広いニーズに対応します。\n\n世界に一つだけのイラストで、特別な瞬間や思い出を形に残しませんか？',
      price: 'イラストの種類やサイズによって料金が変動します。\n・シンプルイラスト: 10,000円〜\n・複雑なイラスト: 30,000円〜\n・大規模なイラスト: 50,000円〜',
      process: [
        'ヒアリング：イラストの用途やご要望について詳しくお伺いします',
        'ラフ案の作成：複数のラフ案を提案します',
        'デザインの確定：お気に入りのラフ案を選んでいただきます',
        '制作：選定されたラフ案を完成させます',
        'データの納品：各種フォーマットでデータをお届けします'
      ]
    }
  },
  {
    title: '名刺作成',
    description: 'ビジネスの第一印象を左右する、プロフェッショナルな名刺デザインを制作いたします。',
    imageUrl: '/portfolios/business-card/side-palette-rogo.jpg',
    images: [
      '/portfolios/business-card/side-palette-rogo.jpg',
      '/portfolios/business-card/side-palette-rogo-omote.jpg',
      '/portfolios/business-card/side-palette-rogo-ura.jpg'
    ],
    content: {
      mainText: '名刺は、ビジネスシーンでの最初の印象を左右する重要なツールです。side paletteでは、クライアントの業種やスタイルに合わせた名刺デザインを提供します。\n\nシンプルで洗練されたデザインから、個性的で目を引くデザインまで、さまざまなスタイルに対応。名刺を通じて、あなたのビジネスをより印象的にアピールします。\n\n一枚の名刺で、ビジネスの可能性を広げましょう。',
      price: '印刷部数やデザインの複雑さによって料金が変動します。\n・デザインのみ: 30,000円〜\n・デザイン＋印刷（100枚）: 50,000円〜\n・デザイン＋印刷（500枚）: 80,000円〜',
      process: [
        'ヒアリング：業種やターゲット層について詳しくお伺いします',
        'デザイン案の作成：複数のデザイン案を提案します',
        'デザインの確定：お気に入りのデザインを選んでいただきます',
        '印刷データの作成：印刷用のデータを作成します',
        '印刷・納品：完成した名刺をお届けします'
      ]
    }
  },
  {
    title: 'YouTube用キャラクター',
    description: 'チャンネルの個性を表現する、魅力的なオリジナルキャラクターを制作いたします。',
    imageUrl: '/portfolios/youtube/yorusizi-01.jpg',
    images: [
      '/portfolios/youtube/yorusizi-01.jpg',
      '/portfolios/youtube/yorusizi-02.png',
      '/portfolios/youtube/yorusizi-03.jpg'
    ],
    content: {
      mainText: 'side paletteでは、YouTubeチャンネルを盛り上げるためのオリジナルキャラクターデザインを提供します。\n\nチャンネルのコンセプトやターゲット層に合わせたキャラクターをデザインし、視聴者に強い印象を与えることで、チャンネルの認知度やファン層を拡大します。\n\nキャラクターデザインは、アイコンやサムネイル、動画内での使用など、さまざまなシーンで活用可能。個性的で愛らしいキャラクターが、あなたのチャンネルをより魅力的にします。\n\nあなたのYouTubeチャンネルを、キャラクターデザインで次のレベルへと導きましょう。',
      price: 'キャラクターの種類や用途によって料金が変動します。\n・シンプルキャラクター: 30,000円〜\n・複雑なキャラクター: 50,000円〜\n・キャラクターセット: 75,000円〜',
      process: [
        'ヒアリング：チャンネルのコンセプトやターゲット層について詳しくお伺いします',
        'キャラクター案の作成：複数のキャラクター案を提案します',
        'デザインの確定：お気に入りのキャラクター案を選んでいただきます',
        '制作：選定されたキャラクター案を完成させます',
        'データの納品：各種フォーマットでデータをお届けします'
      ]
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedService && selectedService.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
      }, 5000);

      return () => clearInterval(timer);
    }
    return undefined;
  }, [selectedService]);

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const prevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
    }
  };

  return (
    <Container>
        <PageTitle>Services</PageTitle>
      <HeroSection>
        <LeadText>
        side paletteは、デジタルからアナログまで、多様なデザインを手掛けるデザイン会社です。クライアントの想いやビジョンを形にするために、常に新しい挑戦を続けています。
        あなたのプロジェクトに合ったデザインを提案します。まずはお気軽にお問い合わせください。一緒に、あなたのビジネスやイベントを成功へと導きましょう。
        </LeadText>
      </HeroSection>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            $isActive={index === currentImageIndex}
            onClick={() => setSelectedService(service)}
          >
            <ServiceImageWrapper>
              <ServiceImage src={service.imageUrl} alt={service.title} />
              <ServiceOverlay>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceOverlay>
            </ServiceImageWrapper>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <AnimatePresence>
        {selectedService && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalCloseButton onClick={() => setSelectedService(null)}>×</ModalCloseButton>
              <ModalImageContainer>
                <ModalImage src={selectedService.images[currentImageIndex]} alt={selectedService.title} />
                <SlideButton $prev onClick={prevImage}>‹</SlideButton>
                <SlideButton $next onClick={nextImage}>›</SlideButton>
              </ModalImageContainer>
              <ModalTitle>{selectedService.title}</ModalTitle>
              <ModalDescription>{selectedService.content.mainText}</ModalDescription>

              <ModalSection>
                <SectionTitle>料金について</SectionTitle>
                <ModalDescription>{selectedService.content.price}</ModalDescription>
              </ModalSection>

              <ModalSection>
                <SectionTitle>制作の流れ</SectionTitle>
                <ProcessList>
                  {selectedService.content.process.map((step, i) => (
                    <ProcessItem key={i}>{step}</ProcessItem>
                  ))}
                </ProcessList>
              </ModalSection>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Services;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: ${kleeOne.style.fontFamily};
`;

const HeroSection = styled.div`
  position: relative;
  padding: 2rem 2rem;
  text-align: center;
  background: linear-gradient(120deg,
    rgba(255, 133, 202, 0.1) 0%,
    rgba(193, 151, 255, 0.1) 50%,
    rgba(133, 234, 255, 0.1) 100%
  );
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 800px;


`;

const PageTitle = styled.h1`
  color: #333;
  text-align: center;
  font-size: 3.5rem;
  position: relative;
  margin: 5rem 0 1rem 0;
  font-family: ${kleeOne.style.fontFamily};
  font-weight: 700;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
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

const LeadText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 2.2;
  font-weight: 500;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto;
  }
`;

const ServiceCard = styled.div<ServiceCardProps>`
  position: relative;
  width: 100%;
  height: 450px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: all 0.3s ease;
  transform: ${props => props.$isActive ? 'scale(1.05)' : 'scale(1)'};
  z-index: ${props => props.$isActive ? 2 : 1};

  &:hover {
    transform: ${props => props.$isActive ? 'scale(1.05)' : 'scale(1.02)'};
  }

  @media (max-width: 768px) {
    height: 400px;
    max-width: 350px;
    margin: 0 auto;
  }
`;

const ServiceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  text-align: left;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: -0.02em;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  opacity: 0.9;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FF6B6B;
  }
`;

const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
`;

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 700;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: -0.02em;
  text-align: center;
`;

const ModalDescription = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #666;
  margin-bottom: 3rem;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
  white-space: pre-line;
`;

const ModalSection = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: -0.02em;
`;

const ProcessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProcessItem = styled.li`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
  padding-left: 1.8rem;
  position: relative;
  line-height: 1.8;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #FF6B6B;
    font-size: 1.5rem;
    line-height: 1;
  }
`;

const SlideButton = styled.button<{ $prev?: boolean; $next?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: all 0.3s ease;
  z-index: 2;

  ${props => props.$prev ? 'left: 1rem;' : ''}
  ${props => props.$next ? 'right: 1rem;' : ''}

  &:hover {
    background: rgba(255, 255, 255, 0.95);
  }
`;

