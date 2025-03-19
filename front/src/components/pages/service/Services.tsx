import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    title: '絵馬デザイン',
    description: '神社仏閣の伝統と現代のデザインを融合させた、オリジナルの絵馬を制作いたします。',
    imageUrl: '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-01.png',
    features: [
      '干支絵馬：その年の干支に合わせた特別なデザイン',
      '祈願絵馬：願いを込めた美しい絵馬',
      '大絵馬：約6畳の大迫力の絵馬（高耐久性塗料使用）'
    ]
  },
  {
    title: 'ロゴデザイン',
    description: 'ブランドの顔となるロゴをデザイン',
    imageUrl: '/portfolios/rogo-design/keyakidokoro-01.jpg',
    features: [
      'ロゴは、企業やブランドの顔となる重要な要素です。side paletteでは、クライアントの理念やターゲット層を徹底的に分析し、その企業やブランドに最適なロゴデザインを提案します。',
      'シンプルで印象的なデザインから、個性的で独創的なデザインまで、幅広いニーズに対応。ロゴを通じて、ブランドの魅力を最大限に引き出します。',
      'あなたのビジネスを象徴するロゴを、一緒に作り上げましょう。ロゴは、企業やブランドの顔となる重要な要素です。side paletteでは、クライアントの理念やターゲット層を徹底的に分析し、その企業やブランドに最適なロゴデザインを提案します。','シンプルで印象的なデザインから、個性的で独創的なデザインまで、幅広いニーズに対応。ロゴを通じて、ブランドの魅力を最大限に引き出します。',
    'あなたのビジネスを象徴するロゴを、一緒に作り上げましょう。'
    ]
  },
  {
    title: 'ウェルカムボード',
    description: 'お客様をお迎えする最初の印象を彩る、温かみのあるウェルカムボードを制作いたします。',
    imageUrl: '/portfolios/welcome-board/welcome-board-01.jpg',
    features: [
      'イベントや式典に合わせたデザイン',
      '季節感のある装飾',
      '耐久性の高い素材使用'
    ]
  },
  {
    title: 'オーダーイラスト',
    description: 'お客様のご要望に合わせた、オリジナルのイラストを制作いたします。',
    imageUrl: '/portfolios/order-illust/order-illust-01.jpg',
    features: [
      '用途に合わせた最適なデザイン',
      '高品質な仕上がり',
      '思い出に残る特別なイラスト'
    ]
  },
  {
    title: '名刺作成',
    description: 'ビジネスの第一印象を左右する、プロフェッショナルな名刺デザインを制作いたします。',
    imageUrl: '/portfolios/business-card/side-palette-rogo.jpg',
    features: [
      '企業ブランドに合わせたデザイン',
      '高品質な印刷',
      '実用的なレイアウト'
    ]
  },
  {
    title: 'YouTube用キャラクター',
    description: 'チャンネルの個性を表現する、魅力的なオリジナルキャラクターを制作いたします。',
    imageUrl: '/portfolios/youtube/yorusizi-01.jpg',
    features: [
      'チャンネルコンセプトに合わせたデザイン',
      '動きやすいキャラクター',
      '多様な表情やポーズ'
    ]
  }
];

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroSection = styled.div`
  position: relative;
  padding: 4rem 2rem;
  text-align: left;
`;

const AboutUsLabel = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  transform: rotate(-5deg);
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #FF6B6B, transparent);
  }
`;

const LeadText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  perspective: 2000px;
  cursor: pointer;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  overflow: hidden;
`;

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const ServiceTitle = styled.h3`
  margin: 15px 0;
  font-size: 1.5rem;
  color: #333;
`;

const BackTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ServicePoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  width: 100%;
`;

const ServicePoint = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 5px 0;
  padding-left: 20px;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #4ECDC4;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;

  &:hover {
    color: #333;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #FF6B6B;
  }
`;

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <Container>
      <HeroSection>
        <AboutUsLabel>Services</AboutUsLabel>
        <PageTitle>サービス紹介</PageTitle>
        <LeadText>
          お客様の思いを形に、新しい価値を創造します。
        </LeadText>
      </HeroSection>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedService(service)}
          >
            <CardInner className="card-inner">
              <CardFront>
                <ServiceImage src={service.imageUrl} alt={service.title} />
                <ServiceTitle>{service.title}</ServiceTitle>
              </CardFront>
              <CardBack>
                <BackTitle>{service.title}</BackTitle>
                <ServicePoints>
                  {service.features.slice(0, 3).map((feature, i) => (
                    <ServicePoint key={i}>{feature}</ServicePoint>
                  ))}
                </ServicePoints>
              </CardBack>
            </CardInner>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <AnimatePresence>
        {selectedService && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <ModalContent
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalCloseButton onClick={() => setSelectedService(null)}>×</ModalCloseButton>
              <ModalImage src={selectedService.imageUrl} alt={selectedService.title} />
              <ModalTitle>{selectedService.title}</ModalTitle>
              <ModalDescription>{selectedService.description}</ModalDescription>
              <FeaturesList>
                {selectedService.features.map((feature, i) => (
                  <FeatureItem key={i}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Services;