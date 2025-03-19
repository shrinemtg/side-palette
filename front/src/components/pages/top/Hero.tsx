import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  '/portfolios/monkey-and-bird/monkey-and-bird-character-02.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-character-03.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-rogo.jpg',
  '/portfolios/order-illust/order-illust-01.jpg',
  '/portfolios/order-illust/order-illust-02.jpg',
  '/portfolios/rogo-design/keyakidokoro-01.jpg',
  '/portfolios/welcome-board/welcome-board-01.jpg',
  '/portfolios/youtube/yorusizi-01.jpg',
  '/portfolios/youtube/yorusizi-02.png',
  '/portfolios/youtube/yorusizi-03.jpg',
];

interface GridItem {
  id: number;
  imageUrl: string;
}

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [gridItems] = useState<GridItem[]>(
    artworks.map((url, index) => ({
      id: index,
      imageUrl: url
    }))
  );

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;

    // グリッドアイテムのアニメーション
    const gridElements = container.querySelectorAll('.grid-item');
    gsap.fromTo(gridElements,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }
    );

    // タイトルのアニメーション（フェードインのみ）
    gsap.fromTo(title,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out"
      }
    );
  }, []);

  // マウスが領域から出た時のハンドラを修正
  const handleMouseLeave = () => {
    const gridElements = document.querySelectorAll('.grid-item');
    gridElements.forEach((element) => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1.5, // 戻る時間を延長
        ease: "power2.inOut", // イージングを変更してよりスムーズに
      });
    });
  };

  // マウス移動時のアニメーションも調整
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;

    const gridElements = document.querySelectorAll('.grid-item');
    gridElements.forEach((element, i) => {
      gsap.to(element, {
        x: x * 20 * (i % 6 - 2.5),
        y: y * 20 * (Math.floor(i / 6) - 1.5),
        duration: 0.8, // 移動時間も少し延長
        ease: "power2.out"
      });
    });
  };

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
              {gridItems.map((item) => (
                <GridItem
                  key={`${index}-${item.id}`}
                  className="grid-item"
                >
                  <img src={item.imageUrl} alt="" loading="lazy" />
                </GridItem>
              ))}
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
  // margin: 30px 0;
  position: relative;
  overflow: hidden;
  background-color: #EAEAEA;
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
`;

// カルーセルの内部スタイル
const CarouselInner = styled.div`// カルーセルの内部スタイル
  display: flex;                          // フレックスボックスを使用してカルーセルを作成
  gap: 1rem;                            // カルーセルのアイテム間に1.5remのスペースを設定
  padding: 1rem;                        // カルーセルのアイテムの周囲に1.5remのパディングを設定
  animation: scroll 40s linear infinite;  // スクロールアニメーションを40秒で繰り返し実行
  width: fit-content;                     // カルーセルの幅を内容に合わせる
  & > div {// カルーセルの内部のdiv要素に対するスタイル
    display: grid;// グリッドレイアウトを使用してカルーセルを作成
    grid-template-columns: repeat(6, 1fr);// 6列のグリッドを作成
    grid-template-rows: repeat(3, 1fr);// 4行のグリッドを作成
    gap: 1rem;// グリッドのアイテム間に1.5remのスペースを設定
    flex-shrink: 0;// カルーセルの幅を内容に合わせる
    place-items: center;// カルーセルのアイテムを中央揃えにする
    min-width: calc(100vw - 3rem);// カルーセルの幅を内容に合わせる
  }

  @keyframes scroll {
    0% {
      transform: translateX(calc(-100% / 3));
    }
    100% {
      transform: translateX(calc(-100% * 2 / 3));
    }
  }
`;

// グリッドアイテムのスタイル
const GridItem = styled.div`
  position: relative;  // 相対配置
  overflow: hidden;  // オーバーフローを非表示にする
  border-radius: 20px;  // 角を20pxに設定
  width: 300px;  // 幅を300pxに設定
  height: 300px;  // 高さを300pxに設定
  transition: transform 0.3s ease;  // 変換を0.3秒で滑らかに遷移

  img {
    width: 100%;  // 幅を100%に設定
    height: 100%;  // 高さを100%に設定
    object-fit: cover;  // オブジェクトをカバーにする
    filter: brightness(1) contrast(1.2);  // 明るさを0.8倍に、コントラストを1.2倍に設定
    margin: 0;  // マージンを0に設定
  }

  @media (max-width: 1440px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

// タイトルのラップスタイル
const TitleWrapper = styled.div`
  position: absolute;// 絶対配置
  top: 50%;// 上部から50%の位置に配置
  left: 50%;// 左から50%の位置に配置
  transform: translate(-50%, -50%);// 水平方向に50%移動し、垂直方向に50%移動
  z-index: 2;// 要素の重なり順を2に設定
  mix-blend-mode: difference;// ブレンドモードを差分に設定
  pointer-events: none;// ポインタイベントを無効にする
`;

// クリップタイトルのスタイル
const ClipTitle = styled.h1`
  font-size: clamp(4rem, 10vw, 8rem);// フォントサイズをクランプする
  font-weight: 900;// フォントの太さを900に設定
  color: white;// テキストの色を白色に設定
  text-align: center;// テキストを中央揃えにする
  font-family: 'Montserrat', sans-serif;// フォントをMontserratに設定
  letter-spacing: -2px;// 文字間隔を-2pxに設定
  mix-blend-mode: difference;// ブレンドモードを差分に設定
  text-transform: uppercase;// テキストを大文字にする

  // モバイル用のスタイル
  @media (max-width: 768px) {
    font-size: clamp(3rem, 8vw, 5rem);
  }
`;

const ScrollDownIcon = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #333;
    border-right: 2px solid #333;
    transform: rotate(45deg);
    animation: scrollDown 2s infinite;
    opacity: 0;

    &:nth-child(1) {
      animation-delay: 0s;
    }

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
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }

  @media (max-width: 768px) {
    bottom: 1rem;

    span {
      width: 15px;
      height: 15px;
    }
  }
`;

export default HeroSection;