import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const ShortContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }
    const handleScroll = () => {
      if (buttonRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        setIsVisible(scrollPosition > windowHeight * 0.5);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <FixedCTAButton
      href="/contact"
      ref={buttonRef}
      className={isVisible ? 'visible' : ''}
    >
      お問い合わせ
    </FixedCTAButton>
  );
};

// スタイル定義
const FixedCTAButton = styled.a`
    position: fixed;
    right: 2rem;
    bottom: 4rem;
    z-index: 1000;
    padding: 0.8rem 1rem;
    background: linear-gradient(120deg, #ff85ca, #85eaff);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    transition: all 0.3s ease;
    cursor: url("/images/hude.svg") 0 20, pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    writing-mode: horizontal-tb;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;

  // 表示状態のスタイル
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

  // ホバー時のアニメーション
    &:hover {
        animation: shake 0.5s ease-in-out;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

  // シェイクアニメーションの定義
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

  // タブレット用スタイル
    @media (max-width: 768px) {
        right: 1rem;
        bottom: 5rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }

  // モバイル用スタイル
    @media (max-width: 480px) {
        right: 1rem;
        bottom: 1rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        padding: 0.8rem 0.75rem;
    font-size: 0.8rem;
        letter-spacing: 0.2em;
    }
`;

export default ShortContact;
