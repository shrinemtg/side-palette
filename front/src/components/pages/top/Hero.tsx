import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// 固定のアートワーク画像配列
const artworks = [
  '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-01.png',
  '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-02.jpg',
  '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-01.png',
  '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-02.jpg',
  '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-03.jpg',
  '/portfolios/eto-ema-taishido/taishido-eto-ema-mi-01.jpg',
  '/portfolios/eto-ema-taishido/taishido-kigan-ema-01.jpg',
  '/portfolios/graphic/label-concon.png',
  '/portfolios/monkey-and-bird/monkey-and-bird-01.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-02.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-character-01.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-character-03.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-rogo.jpg',
  '/portfolios/order-illust/order-illust-01.jpg',
  '/portfolios/order-illust/order-illust-02.jpg',
  '/portfolios/order-illust/toipu.png',
  '/portfolios/rogo-design/keyakidokoro-01.jpg',
  '/portfolios/rogo-design/fao-01.jpg',
  '/portfolios/rogo-design/koala-hihuka‐clinic-01.jpg',
  '/portfolios/rogo-design/well-be-earth-01.jpg',
  '/portfolios/welcome-board/welcome-board-01.jpg',
  '/portfolios/youtube/yorusizi-01.jpg',
  '/portfolios/youtube/yorusizi-03.jpg',
] as const;

const initialGridItems = artworks.map((url, index) => ({
  id: index,
  imageUrl: url
}));

interface GridItemData {
  id: number;
  imageUrl: string;
}

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [gridItems, setGridItems] = useState<GridItemData[]>(initialGridItems);

  // GSAPプラグイン登録（クライアントのみ）
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // アニメーションの初期化
  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;
    const gridElements = container.querySelectorAll('.grid-item');
    const gridAnimation = gsap.fromTo(gridElements,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }
    );
    const titleAnimation = gsap.fromTo(title,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out"
      }
    );
    return () => {
      gridAnimation.kill();
      titleAnimation.kill();
    };
  }, []);

  // シャッフル処理（クライアントのみ）
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shuffledItems = [...initialGridItems];
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }
    setGridItems(shuffledItems);
  }, []);

  // マウスイベントハンドラ
  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    const gridElements = document.querySelectorAll('.grid-item');
    gridElements.forEach((element, i) => {
      gsap.to(element, {
        x: x * 20 * (i % 6 - 2.5),
        y: y * 20 * (Math.floor(i / 6) - 1.5),
        duration: 0.8,
        ease: "power2.out"
      });
    });
  };

  const handleMouseLeave = () => {
    if (typeof window === 'undefined') return;
    const gridElements = document.querySelectorAll('.grid-item');
    gridElements.forEach((element) => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    });
  };

  // priorityは最初の1枚だけtrue
  let prioritySet = false;

  return (
    <HeroContainer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselWrapper>
        <CarouselInner>
          {[...Array(4)].map((_, index) => (
            <div key={`grid-set-${index}`} className="grid-set">
              {gridItems.map((item, i) => {
                let priority = false;
                if (!prioritySet && index === 0 && i === 0) {
                  priority = true;
                  prioritySet = true;
                }
                return (
                  <StyledGridItem
                    key={`${index}-${item.id}`}
                    className="grid-item"
                  >
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 33vw, 16vw"
                      style={{ objectFit: 'cover' }}
                      priority={priority}
                    />
                  </StyledGridItem>
                );
              })}
            </div>
          ))}
        </CarouselInner>
      </CarouselWrapper>
      <TitleWrapper>
        <ClipTitle ref={titleRef}>
          Side Palette
        </ClipTitle>
      </TitleWrapper>
      <ScrollDownIcon>
        <span></span>
        <span></span>
        <span></span>
      </ScrollDownIcon>
    </HeroContainer>
  );
};

// コンテナのスタイル
const HeroContainer = styled.section`
  height: 95vh;
  width: 100%;
  margin: 2rem 0 12rem 0;
  position: relative;
  overflow: visible;
  background-color: #EAEAEA;

  @media (max-width: 768px) {
    height: 100vh;
    margin: 0 0 4rem 0;
  }
`;

// カルーセルのスタイル
const CarouselWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 95vh;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );

  @media (max-width: 768px) {
    height: 100vh;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 2%,
      black 98%,
      transparent
    );
  }
`;

// カルーセルの内部スタイル
const CarouselInner = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  animation: scroll 40s linear infinite;
  width: fit-content;

  & > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    flex-shrink: 0;
    place-items: center;
    min-width: calc(100vw - 3rem);
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.75rem;

    & > div {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 0.75rem;
      min-width: calc(100vw - 1.5rem);
      height: 100vh;
      align-items: center;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(calc(-100% / 3));
    }
    100% {
      transform: translateX(calc(-200% / 3));
    }
  }
`;

// グリッドアイテムのスタイル
const StyledGridItem = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  &:hover {
    transform: scale(1.05);

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    aspect-ratio: 1;
    height: calc((100vh - 3rem) / 4);
  }
`;

// タイトルラッパーのスタイル
const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  width: 100%;
`;

// クリップタイトルのスタイル
const ClipTitle = styled.h1`
  font-size: 10vw;
  font-weight: 700;
  color: transparent;
  background: linear-gradient(45deg, rgba(255, 255, 255), rgba(255, 255, 255));
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);
  margin: 0;
  padding: 0;
  line-height: 1.2;
  letter-spacing: 0.1em;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8));
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  @media (max-width: 768px) {
    font-size: 15vw;
  }
`;

// スクロールダウンアイコンのスタイル
const ScrollDownIcon = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;

  span {
    width: 20px;
    height: 20px;
    border-left: 2px solid #333;
    border-bottom: 2px solid #333;
    transform: rotate(-45deg);
    animation: scrollDown 1.5s infinite;
    opacity: 0;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translate(0, -10px) rotate(-45deg);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(0, 10px) rotate(-45deg);
    }
  }

  @media (max-width: 768px) {
    bottom: -1rem;

    span {
      width: 15px;
      height: 15px;
    }
  }
`;

export default HeroSection;