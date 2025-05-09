import Link from 'next/link'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const workImages = [
  '/portfolios/rogo-design/rogo-design-01.jpg',
  '/portfolios/welcome-board/welcome-board-02.jpg',
  '/portfolios/business-card/side-palette-rogo.jpg',
  '/portfolios/order-illust/order-illust-01.jpg',
  '/portfolios/graphic/label-concon.png',
  '/portfolios/youtube/yorusizi-01.jpg',
  '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-02.jpg',
  '/portfolios/monkey-and-bird/monkey-and-bird-01.jpg',
  '/portfolios/eto-ema-taishido/taishido-kigan-ema-01.jpg',
]

const ServicesButtonBlock = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <BlockContainer>
      <ServiceTitle>Service</ServiceTitle>
      <SliderWrapper>
        <SliderTrack>
          {[...workImages, ...workImages].map((src, idx) => (
            <WorkImage key={src + idx} src={src} alt={`制作実績${(idx % workImages.length) + 1}`} />
          ))}
        </SliderTrack>
      </SliderWrapper>
      <CatchCopy>
        このような制作を行っています。{isMobile && <br />}
        詳細は各実績をご覧ください。
      </CatchCopy>
      <Link href='/service' passHref legacyBehavior>
        <ServiceButton>サービス一覧はこちら</ServiceButton>
      </Link>
    </BlockContainer>
  )
}

export default ServicesButtonBlock

// styled-componentsはファイル下部に配置
const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 6rem 0;
  margin: 6rem 0 12rem 0;
`

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin-bottom: 1.2rem;
`

const SliderTrack = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  animation: slide-left 18s linear infinite;
  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`

const WorkImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
  background: #eee;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  flex-shrink: 0;
  margin-right: 0.5rem;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  }
  @media (max-width: 1024px) {
    width: 128px;
    height: 128px;
  }
  @media (max-width: 768px) {
    width: 112px;
    height: 112px;
  }
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-right: 0.3rem;
  }
`

const CatchCopy = styled.div`
  font-size: 1rem;
  color: #444;
  margin: 2rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.03em;
  @media (max-width: 480px) {
    font-size: 0.92rem;
    margin: 1.2rem 0.5rem 1.2rem 0.5rem;
    white-space: normal;
    overflow-wrap: break-word;
    word-break: break-all;
  }
`

const ServiceButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  border: none;
  opacity: 1;
  text-align: center;
  &:hover {
    animation: shake 0.5s ease-in-out;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    filter: brightness(1.05);
  }
  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
  @media (max-width: 768px) {
    padding: 0.75rem 1.2rem;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
  }
`

const ServiceTitle = styled.h2`
  font-size: 48px !important;
  font-weight: 400;
  color: #222;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  line-height: 1.2;
  &::after {
    content: '';
    display: block;
    height: 4px;
    width: 100%;
    margin: 0.3em auto 0 auto;
    border-radius: 2px;
    background: linear-gradient(90deg, #e6b7e5 0%, #b7e6e0 50%, #e6e5b7 100%);
  }
  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`
