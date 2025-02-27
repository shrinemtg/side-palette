import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 固定のアートワーク画像配列
const artworks = [
  // 1セット目
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1576773689115-5cd2b0223523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  // 2セット目（新しい画像を追加）
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
  'https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
];

interface GridItem {
  id: number;
  imageUrl: string;
}

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    setMousePosition({ x, y });

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
    </HeroContainer>
  );
};

// コンテナのスタイル
const HeroContainer = styled.section`
  height: 60vh; // デフォルトの高さ
  width: 80%; // 幅を100%に設定
  margin: 0 auto; // 左右に均等に配置
  border-radius: 20px; // 角を丸くする
  position: relative; // 相対配置
  overflow: hidden; // はみ出た要素を非表示にする
  background-color: #000; // 背景色を黒に設定
  margin-top: 160px; // 上部に60pxのマージンを設定
`;

// カルーセルのスタイル
const CarouselWrapper = styled.div`
  position: absolute; // 絶対配置
  top: 30%; // 上部から50%の位置に配置
  transform: translateY(-50%); // 垂直方向に50%移動
  width: 100%; // 幅を100%に設定
  height: 80vh; // 高さを80vhに設定
  overflow: hidden; // はみ出た要素を非表示にする
  mask-image: linear-gradient(// マスクを設定
    to right,// 右から左に向かって
    transparent,// 透明
    black 5%,// 黒色を5%の位置から
    black 95%,// 黒色を95%の位置から
    transparent// 透明
  );
`;

// カルーセルの内部スタイル
const CarouselInner = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  animation: scroll 40s linear infinite;
  width: fit-content;

  // グリッドセットのスタイル
  & > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2rem; // グリッド内の余白を統一
    min-width: calc(100vw - 6rem); // パディングを考慮して調整
    flex-shrink: 0;
    place-items: center; // グリッドアイテムを中央揃えに
  }
`;

// グリッドアイテムのスタイル
const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  width: 250px;
  height: 250px;
  transition: transform 0.3s ease; // トランジションを追加

  img {// 画像のスタイル
    width: 100%;// 幅を100%に設定
    height: 100%;// 高さを100%に設定
    object-fit: cover;// オブジェクトをカバーする
    filter: brightness(0.8) contrast(1.2);// 明るさを0.8倍にし、コントラストを1.2倍にする
    margin-bottom: 5rem;// 下部に1remのマージンを設定
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

export default HeroSection;