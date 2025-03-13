import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

interface WorkDetails {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  role: string;
  features: string[];
  thumbnail: string;
  images?: string[];
}

const portfolioData: WorkDetails[] = [
  {
    title: "スナック喫茶 モンキー&バード",
    description: "猿と鳥をモチーフにしたイラストレーション作品。店舗のイメージキャラクターとして動物たちの自然な動きと表情を捉えた心温まる作品を目指しました。",
    technologies: ["Illustrator", "Photoshop"],
    period: "2024年8月 - 2024年9月",
    role: "イラストレーター、グラフィックデザイナー",
    features: ["手描きテイストの温かみのある表現", "動物の特徴を活かした構図", "季節感のある色使い"],
    thumbnail: "/portfolios/monkey-and-bird/monkey-and-bird-01.jpg",
    images: [
      "/portfolios/monkey-and-bird/monkey-and-bird-01.jpg",
      "/portfolios/monkey-and-bird/monkey-and-bird-02.jpg",
      "/portfolios/monkey-and-bird/monkey-and-bird-character-01.jpg",
      "/portfolios/monkey-and-bird/monkey-and-bird-character-02.jpg",
      "/portfolios/monkey-and-bird/monkey-and-bird-character-03.jpg",
      "/portfolios/monkey-and-bird/monkey-and-bird-rogo.jpg"
    ]
  },
  {
    title: "干支絵馬 - 神明社",
    description: "神明社様のために制作した干支絵馬デザイン。宮司様とのヒアリングを踏まえ、その年ごとの情勢を考慮し願いを込めたデザインを心がけています。",
    technologies: ["Illustrator", "伝統的な絵馬デザイン技法"],
    period: "毎年　10月 - 12月",
    role: "イラストレーター、デザイナー",
    features: ["時代背景からその年の祈りと願いを象徴したデザイン", "６畳分の大きさの大絵馬"],
    thumbnail: "/images/portfolio/eto-ema-shinmei/shinmei-eto-ema.jpg",
    images: [
      "/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-01.jpg",
      "/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-02.jpg",
      "/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-03.jpg",
      "/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-01.jpg",
      "/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-02.jpg",
      "/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-03.jpg",
    ]
  },
  {
    title: "絵馬 - 太子堂八幡宮",
    description: "太子堂八幡宮様のために制作した絵馬デザイン。境内の特色と歴史を反映させ水彩画風に仕上げた祈願絵馬と折り紙と宝船をモチーフにした干支絵馬のデザインをさせて頂きました。",
    technologies: ["Illustrator", "伝統工芸技法"],
    period: "2024年4月 - 2024年5月",
    role: "イラストレーター、デザイナー",
    features: ["境内の特色と歴史を反映させたデザイン", "親しみやすいモチーフからの独自表現", "伝統的な色使いの現代的解釈"],
    thumbnail: "/images/portfolio/eto-ema-taishido/taishido-eto-ema.jpg",
    images: [
      "/portfolios/eto-ema-taishido/taishido-eto-ema-mi-01.jpg",
      "/portfolios/eto-ema-taishido/taishido-kigan-ema-01.jpg",
    ]
  }
];

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <PageTitle>Project Pick Up</PageTitle>
      {portfolioData.map((work, index) => (
        <WorkSection key={work.title} isReverse={index % 2 !== 0}>
          <ImageContainer>
            {work.images ? (
              <Slideshow images={work.images} />
            ) : (
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={600}
                height={400}
                objectFit="cover"
              />
            )}
          </ImageContainer>
          <WorkDetails>
            <WorkTitle>
              {work.title === "スナック喫茶 モンキー&バード" ? (
                <>
                  <SubTitle>スナック喫茶</SubTitle>
                  モンキー&バード
                </>
              ) : (
                work.title
              )}
            </WorkTitle>
            <Description>{work.description}</Description>
            <DetailsList>
              <DetailItem>
                <DetailLabel>使用技術：</DetailLabel>
                <DetailContent>{work.technologies.join(', ')}</DetailContent>
              </DetailItem>
              <DetailItem>
                <DetailLabel>制作期間：</DetailLabel>
                <DetailContent>{work.period}</DetailContent>
              </DetailItem>
              <DetailItem>
                <DetailLabel>役割：</DetailLabel>
                <DetailContent>{work.role}</DetailContent>
              </DetailItem>
              <DetailItem>
                <DetailLabel>特徴：</DetailLabel>
                <DetailContent>
                  <FeaturesList>
                    {work.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </FeaturesList>
                </DetailContent>
              </DetailItem>
            </DetailsList>
          </WorkDetails>
        </WorkSection>
      ))}
    </PortfolioContainer>
  );
};

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <SlideImage
          key={image}
          isActive={index === currentIndex}
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        >
          <Image
            src={image}
            alt={`slide-${index + 1}`}
            layout="fill"
            objectFit={image.includes('rogo') ? 'contain' : 'cover'}
            style={{ backgroundColor: image.includes('rogo') ? '#fff' : 'transparent' }}
          />
        </SlideImage>
      ))}
      <SlideshowIndicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </SlideshowIndicators>
    </SlideshowContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

const SlideImage = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  animation: ${props => props.isActive ? fadeIn : 'none'} 0.5s ease-in-out;
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

const Indicator = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${props => props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    height: 3px;
    background: linear-gradient(90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 100%
    );
  }
`;

const WorkSection = styled.section<{ isReverse: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 8rem;
  align-items: center;

  ${props => props.isReverse && `
    direction: rtl;
    > * {
      direction: ltr;
    }
  `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    direction: ltr;
    margin-bottom: 4rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const WorkDetails = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const WorkTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #666;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 0.9rem;
`;

const DetailContent = styled.span`
  color: #666;
  line-height: 1.5;
`;

const FeaturesList = styled.ul`
  margin: 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Portfolio;