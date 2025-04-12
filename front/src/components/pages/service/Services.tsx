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
    price?: string;
    process: string[];
  };
}

const services: ServiceItem[] = [
  {
    title: '絵馬・御朱印デザイン',
    description: '神社仏閣の伝統と趣はのしつつ、現代の流れを汲み取った、オリジナルの絵馬を制作いたします。',
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
      mainText: '日々の願いや、\n心に募る大切な想いを、\nオリジナルの絵馬や御朱印という形にしてみませんか？ \n\n神社仏閣の雰囲気を大切にしながら、\n宮司様や住職様の想いを込めたデザインを考えます。\nどんなことでも、お気軽にご相談ください。',
      process: [
        'ヒアリング：お客様の業種やターゲット層について詳しくお伺いします',
        'デザイン案の作成：いくつかデザイン案をご提案します。',
        'デザインの確定：お客様とお話をしながらデザイン選定、修正します',
        '印刷データの作成：印刷用のデータを作成します',
        '印刷・納品：完成した名刺をお届けします',
        '※印刷データの作成以降のデザインの変更は出来かねますのでご了承ください。'
      ]
    }
  },
  {
    title: 'ロゴデザイン',
    description: 'お客様のブランドストーリーを、一目で語る、心が躍るロゴデザインを制作いたします',
    imageUrl: '/portfolios/rogo-design/keyakidokoro-01.jpg',
    images: ['/portfolios/rogo-design/keyakidokoro-01.jpg'],
    content: {
      mainText: 'お店や会社のシンボルマークとなる\nロゴデザイン\n\nお客様の業種やスタイルに合わせ、\nかわいらしいキャラクターのロゴデザインから、\nスタイリッシュなロゴデザインまで、\nさまざまなスタイルのものを作っています。\n\nコンセプトはあるけどデザインが決まらない\n気に入ったものが見つからない\n\nSide Paletteでは\nお客様のご要望をお聞きしながら\nより良いデザインを制作させていただきます\n\nその他、\n人物ではなく、思い出の風景のイラストにしたい\nリアルではなくアニメ寄りにしたい等ございましたら\nお気軽にご相談ください\n\nお困りの際はお気軽にお問い合わせください。',
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
    description: '訪れる方をお迎えする最初の印象を彩る、温かみのあるウェルカムボードを制作いたします。',
    imageUrl: '/portfolios/welcome-board/welcome-board-01.jpg',
    images: [
      '/portfolios/welcome-board/welcome-board-01.jpg'
    ],
    content: {
      mainText: '結婚式は、新郎新婦にとって一生に一度の特別な日。\n新郎新婦の個性やストーリーを反映したイラストで、\nゲストをもてなすwelcomeボードを制作します。',
      price: '※サイズやイラストの複雑さによって料金が変動します。\n\n・キャラクターのみ：20,000円\n（簡易的な背景は付いています）\n・背景あり：＋5,000円～\n(新郎新婦様のお好きなお花やもの、思い出の場所等\nご要望にお応えし、入れさせていただきます。)',
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
      mainText: '誰かに届けたいオリジナルのものや\nあなたが欲しいあなただけのイラストを\n丁寧にヒアリングし、制作します。\nリアルなものからアニメ風のものまで\n世界に一つだけのイラストで、\n特別な瞬間や思い出を形に残しませんか？\n\n・誰かの誕生日、記念日に\n・自分の思い出の風景などの一枚絵\n・ショップの開店、閉店のプレゼントに\n...etc\n\nそのほかイラストについてご相談、お悩みございましたら\n上記にないものでも構いません\nまずはお気軽にお問い合わせください。',
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
    title: 'ビジネス用オーダーイラスト',
    description: 'お客様の事業ならではの魅力を引き出す、オリジナリティあふれるキャラクターを制作いたします。',
    imageUrl: '/portfolios/youtube/yorusizi-01.jpg',
    images: [
      '/portfolios/youtube/yorusizi-01.jpg',
      '/portfolios/youtube/yorusizi-02.png',
      '/portfolios/youtube/yorusizi-03.jpg',
      '/portfolios/business-order/business-order-2.jpg',
      '/portfolios/business-order/business-order-3.jpg',
      '/portfolios/business-order/business-order-4.jpg',
      '/portfolios/business-order/business-order-5.jpg'
    ],
    content: {
      mainText: 'Side Paletteではお仕事に使う\nキャライラストなどの制作も行っております。\nお客様のお話しをお伺いしながら\nキャラクターのデザインから\nイラストの作成まで行っています\n\nあなたのお仕事を彩る\n世界に一つのキャラクターをつくりませんか？\n\n・YouTubeなどのサムネ用\n・サイトやsnsに使用する差しイラスト\n・ショップのメインキャラクター作成\n...etc\n\nそのほかイラストについてご相談、お悩みございましたら\n上記にないものでも構いません\nまずはお気軽にお問い合わせください。',
      process: [
        'ヒアリング：チャンネルのコンセプトやターゲット層について詳しくお伺いします。',
        'キャラクター案の作成：キャラクター案をラフ画でご提案します。',
        'デザインの確定：キャラクターのご提案からヒアリングを通してキャラクターの確定をします',
        '制作：確定したキャラクターを元にイラストを制作させていただきます。',
        'データの納品：jpg、png、PDF、PSD等必要なフォーマットでデータをお届けします。',
        '※制作に進んだ場合その後の大幅な修正は出来かねますのでご了承ください。'
      ]
    }
  },
  {
    title: '名刺作成',
    description: '出会いの瞬間に信頼を築き、ビジネスを加速させる、印象的な名刺を制作いたします。',
    imageUrl: '/portfolios/business-card/side-palette-rogo.jpg',
    images: [
      '/portfolios/business-card/side-palette-rogo.jpg',
      '/portfolios/business-card/side-palette-rogo-omote.jpg',
      '/portfolios/business-card/side-palette-rogo-ura.jpg'
    ],
    content: {
      mainText: 'ビジネスシーンで使用する\n名刺やショップカード等も制作しています。\n\nお客様の業種やスタイルに合わせ、\nシンプルで洗練されたデザインから、\n個性的で目を引くデザインまで、\nさまざまなスタイルのものを作っています。\n\nオシャレな名刺が欲しい\n可愛いショップカードが欲しい\n派手な名刺が欲しいなど\n\nお悩みの際は\nお気軽にお問い合わせください。',
      process: [
        'ヒアリング：お客様の業種やターゲット層について詳しくお伺いします',
        'デザイン案の作成：いくつかデザイン案をご提案します。',
        'デザインの確定：お客様とお話をしながらデザイン選定、修正します',
        '印刷データの作成：印刷用のデータを作成します',
        '印刷・納品：完成した名刺をお届けします',
        '※印刷データの作成以降のデザインの変更は出来かねますのでご了承ください。'
      ]
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (selectedService && selectedService.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
      }, 5000);

      return () => clearInterval(timer);
    }
    return undefined;
  }, [selectedService]);

  useEffect(() => {
    // サービスが選択されたら画像の読み込み状態をリセット
    setImageLoaded(false);

    // 画像を事前に読み込む
    if (selectedService) {
      const img = new Image();
      img.src = selectedService.images[currentImageIndex];
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [selectedService, currentImageIndex]);

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  return (
    <Container>
      <PageTitle>Services</PageTitle>
      <HeroSection>
        <LeadText>
          side paletteは、デジタルからアナログまで、多様なデザインを手掛けるデザイン会社です。<br /><br />
          お客様の想いやビジョンを形にするために、常に新しい挑戦を続けています。<br /><br />
          以下が主なサービス内容です。<br />
          この他にも柔軟にご対応できますので、まずはお気軽にお問い合わせください。
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
                {imageLoaded ? (
                  <ModalImage
                    src={selectedService.images[currentImageIndex]}
                    alt={selectedService.title}
                    onClick={nextImage}
                  />
                ) : (
                  <ImagePlaceholder>画像を読み込み中...</ImagePlaceholder>
                )}
                <SlideshowIndicators>
                  {selectedService.images.map((_, index) => (
                    <Indicator
                      key={index}
                      $isActive={index === currentImageIndex}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </SlideshowIndicators>
              </ModalImageContainer>
              <ModalTitle>{selectedService.title}</ModalTitle>
              <ModalDescription>{selectedService.content.mainText}</ModalDescription>

              <ModalSection>
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
  transform: ${props => props.$isActive ? 'scale(1.02)' : 'scale(1)'};
  z-index: ${props => props.$isActive ? 2 : 1};

  &:hover {
    transform: ${props => props.$isActive ? 'scale(1.02)' : 'scale(1.01)'};
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
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  opacity: 1;
  font-family: ${kleeOne.style.fontFamily};
  letter-spacing: 0.02em;
  background-color: rgba(246, 242, 242, 0.09);
  border-radius: 8px;
  padding: 0.1rem;
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
  top: 2.5rem;
  right: 3rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  transition: color 0.3s ease;
  z-index: 10;

  &:hover {
    color: #FF6B6B;
  }
`;

const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SlideshowIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Indicator = styled.button<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  }
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
  text-align: center;
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

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #666;
  font-size: 1rem;
  border-radius: 12px;
`;