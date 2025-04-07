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
      mainText: 'ウェルカムボード\n\n結婚式は、新郎新婦にとって一生に一度の特別な日。新郎新婦の個性やストーリーを反映したイラストで、ゲストをもてなすwelcomeボードを、また、結婚式が終わったあとでも記念品として持っていていただけるようなイラストを制作します。\nご要望等ございましたらまずはお気軽にお問い合わせください。',
      price: '料金について\nサイズやイラストの複雑さによって料金が変動します。\n\n・キャラクターのみ(腹上)：20,000円\n※簡易的な背景は付いています。\n\n・背景あり：＋5,000円\n(新郎新婦様のお好きなお花等を入れさせていただきます。)\n\n○その他2人のイラストではなく思い出の風景をイラストにしたい等ございましたら。\n是非ご相談ください\n\n・印刷代\nA3までは上記料金に含まれています\nA3よりも大きいサイズは別途料金が発生致しますご了承ください。\n\n送料\nサイズによって送料が異なります。\nご了承ください。',
      process: [
        'ヒアリング：結婚式のテーマやご要望について詳しくお伺いします',
        'デザイン案の作成：ご要望に合わせ1度イラストのご提案をさせていただき、お客様とイラストのすり合わせをさせていただきます。',
        '料金：お支払い頂いた後、制作工程に進みます。',
        '制作：すり合わせ後作品を制作させていただきます。',
        '仕上がった作品をオンラインで確認して頂いた後額縁に入れて発送させていただきます。(データもお渡しいたします。)',
        '※制作以降のイラストの大きな変更は出来ませんのでご了承ください。'
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
      mainText: 'オーダーイラスト\n\n家族や友人、ペットの似顔絵、思い出の風景、またはビジネスで使用するイラスト等\n誰かに届けたいあなたの思いが沢山こもったオリジナルのものや\nあなたが欲しいオリジナルのイラストを丁寧にヒアリングし、制作します。\n温かみのあるタッチから、ユニークなものまで世界に一つだけのイラストで、特別な瞬間や思い出を形に残しませんか？\n\nご相談、お悩みございましたらまずはお気軽にお問い合わせください。',
      price: '料金について\n※イラストの種類や背景の書き込み\nサイズによって料金が変動します。 \n\nアナログイラスト\n(キャラクターメイン)\n・キャラクター1人(1体)a4サイズ：15,000〜\n・簡易背景：＋7,000〜\n・しっかり背景入り：＋12,000〜\n(風景メイン)\n・風景画(1枚絵)a4サイズ：35,000〜\n\n◾デジタルイラスト\n(キャラクターメイン)\n・キャラクター1人(1体) : 12,000〜\n・簡易背景：＋5,000〜\n・しっかり背景入り：＋10,000～\n(風景メイン)\n・風景画(1枚絵)：30,000〜\n\n\n別途送料はサイズによって変動します。\n\nデジタルイラストはデータ入稿可能です。\nまた、印刷してお渡しすることも可能ですが\n別途印刷料金をいただきます。\n印刷料金もサイズによって変動致しますご了承ください。',
      process: [
        'ヒアリング：イラストの用途やご要望について詳しくお伺いします',
        'ラフ案の作成：ヒアリングを通してラフ案を作成、ご提案しお客様の理想像とのすり合わせを行います',
        '料金：お支払い頂いた後制作工程に進みます。',
        '制作：すり合わせが終わりイラストの方向性が決まり次第制作をさせていただきます。',
        '仕上がった作品をオンラインで確認して頂いた後額縁に入れて発送させていただきます。',
        'データでのお渡しの場合はPDF、jpg等のデータでお客様のメールアドレスにお送りします。',
        '※制作以降の大きな変更は出来ませんのでご了承ください。'
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
      mainText: '名刺作成\nビジネスシーンで使用する名刺やショップカード等も制作しています。\n\nお客様の業種やスタイルに合わせ、シンプルで洗練されたデザインから、個性的で目を引くデザインまで、さまざまなスタイルのものを作っています。\nオシャレな名刺が欲しい。可愛いショップカードが欲しい等\nお困りの際はお気軽にお問い合わせください。',
      price: '料金について\n印刷部数や紙質\nデザインの複雑さによって料金が変動します。 \n\nデザイン代\n・シンプルデザインのみ: 20,000円〜\n・デザイン＋イラストや、手書き絵の具等：30,000円〜\n                                +\n印刷代(送料込)※印刷紙により値段が異なります。\n\n・モノクロ片面(100枚)：4,000円〜\n・カラー片面（100枚)：5,000円〜\n・モノクロ両面(100枚)：6,000円〜\n・カラー両面(100枚) ：7,000円〜',
      process: [
        'ヒアリング：お客様の業種やターゲット層について詳しくお伺いします',
        'デザイン案の作成：いくつかデザイン案をご提案します。',
        'デザインの確定：お客様とお話をしながらデザイン選定、修正します',
        '印刷データの作成：印刷用のデータを作成します',
        '印刷・納品：完成した名刺をお届けします',
        '⚠️印刷データの作成以降のデザインの変更は出来かねますのでご了承ください。'
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
      mainText: 'youTubeチャンネルの歌ってみた等で使用するイラストを\nキャラクターデザインから作成します！\nチャンネルのコンセプトやターゲット層に合わせたキャラクターをデザインし、視聴者に強い印象を与えることで、チャンネルの認知度やファン層を拡大します。\nキャラクターデザインは、アイコンやサムネイル、動画内での使用など、さまざまなシーンで活用可能です。 \nご相談や、お困りの際はお気軽にお問い合わせください。',
      price: 'イラストの種類や枚数により料金が変動します。\n\n ・キャラクター1体(1面): 20,000円〜 \n・キャラクター背景込み(1面): 40,000円〜',
      process: [
        'ヒアリング：チャンネルのコンセプトやターゲット層について詳しくお伺いします。',
        'キャラクター案の作成：キャラクター案をラフ画でご提案します。',
        'デザインの確定：キャラクターのご提案からヒアリングを通してキャラクターの確定をします',
        '制作：確定したキャラクターを元にイラストを制作させていただきます。',
        'データの納品：jpg、png、PDF、PSD等必要なフォーマットでデータをお届けします。',
        '⚠️制作に進んだ場合その後の大幅な修正は出来かねますのでご了承ください。'
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
        あなたのプロジェクトに合ったデザインを提案します。まずはお気軽にお問い合わせください。
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
      rgba(255, 133, 202, 0.2) 0%,
      rgba(193, 151, 255, 0.2) 50%,
      rgba(133, 234, 255, 0.2) 70%,
      rgba(177, 227, 59, 0.2) 90%,
      rgba(243, 188, 22, 0.2) 100%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 800px;


`;

const PageTitle = styled.h1`
  color: #333;
  text-align: center;
  font-size: 2.5rem;
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

const LeadText = styled.p`
  text-align: center;
  font-size: 1rem;
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
  height: 350px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ModalTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 700;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: -0.02em;
  text-align: center;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 3rem;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
  white-space: pre-line;
`;

const ModalSection = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
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
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.5;
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
  background: none;
  border: none;
  width: 0.2rem;
  height: 0.2rem;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.$prev ? 'left: 1rem;' : ''}
  ${props => props.$next ? 'right: 1rem;' : ''}

  &::before {
    content: '';
    position: absolute;
    width: 0.9rem;
    height: 0.9rem;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: ${props => props.$prev ? 'rotate(-135deg)' : 'rotate(45deg)'};
    transition: all 0.3s ease;
  }

  &:hover::before {
    transform: ${props => props.$prev ? 'rotate(-135deg) scale(1.2)' : 'rotate(45deg) scale(1.2)'};
  }
`;

