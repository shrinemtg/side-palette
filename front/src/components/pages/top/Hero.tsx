import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 固定のアートワーク画像配列
const artworks = [
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
  'https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
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

    // タイトルのアニメーション
    gsap.fromTo(title,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out"
      }
    );

    // スクロールアニメーション
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.to(title, {
          y: self.progress * 100,
          opacity: 1 - self.progress,
          duration: 0.5
        });
      }
    });
  }, []);

  // マウス移動に応じたアニメーション
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePosition({ x, y });

    const gridElements = document.querySelectorAll('.grid-item');
    gridElements.forEach((element, i) => {
      gsap.to(element, {
        x: x * 20 * (i % 3 - 1),
        y: y * 20 * (Math.floor(i / 3) - 1),
        duration: 0.5,
        ease: "power2.out"
      });
    });
  };

  return (
    <HeroContainer
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <GridBackground>
        {gridItems.map((item) => (
          <GridItem key={item.id} className="grid-item">
            <img src={item.imageUrl} alt="" />
          </GridItem>
        ))}
      </GridBackground>

      <TitleWrapper>
        <ClipTitle ref={titleRef}>
          Side Palette
        </ClipTitle>
      </TitleWrapper>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  z-index: 1;
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transform-origin: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8) contrast(1.2);
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1) contrast(1.1);
    }
  }
`;

const TitleWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  mix-blend-mode: difference;
`;

const ClipTitle = styled.h1`
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -2px;
  text-transform: uppercase;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    font-size: clamp(3rem, 8vw, 5rem);
  }
`;

export default HeroSection;