import React, { useState, useCallback, memo } from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

// 型定義
interface WorkDetailsType {
  title: string
  summary: string
  description: string
  thumbnail: string
  images?: string[]
}

interface SlideshowProps {
  images: string[]
}

interface ActiveProps {
  $isActive: boolean
}

interface ReverseProps {
  $isReverse?: boolean
}

// ポートフォリオデータ
const portfolioData: WorkDetailsType[] = [
  {
    title: 'スナック喫茶 モンキー&バード',
    summary:
      '喫茶店・BARのキャラクターデザイン\nステンドグラスの鳥と壁紙の猿のオリジナルキャラクターを制作。レトロ調の色味で個性を出し、シンプルで親しみやすいデザインでキャラクターの性格が伝わるよう工夫しました。',
    description:
      '<strong>「お店の核となるイメージキャラクターデザインが欲しい」</strong>喫茶店・BARを経営されているお客様からのご依頼で、Tシャツやグッズに使用するためのオリジナルキャラクターデザインを制作させていただきました。\n\nお客様のご希望により、色味はレトロ調にし、キャラクターに個性を持たせることを意識しました。リアルテイストではなく、イラストからキャラクターの簡単な性格や雰囲気が伝わるよう、シンプルで親しみやすいデザインに仕上げました。\n\nステンドグラスの鳥は、お店の雰囲気に合わせて色鮮やかながらも落ち着いたトーンで表現し、壁紙の猿のキャラクターは、遊び心がありつつもお店のコンセプトに合うようデザインしました。\n\nこれらのキャラクターが、お店の魅力をさらに引き立て、お客様に親しまれることを願っています。',
    thumbnail: '/portfolios/monkey-and-bird/monkey-and-bird-01.jpg',
    images: [
      '/portfolios/monkey-and-bird/monkey-and-bird-01.jpg',
      '/portfolios/monkey-and-bird/monkey-and-bird-02.jpg',
      '/portfolios/monkey-and-bird/monkey-and-bird-character-01.jpg',
      '/portfolios/monkey-and-bird/monkey-and-bird-character-02.jpg',
      '/portfolios/monkey-and-bird/monkey-and-bird-character-03.jpg',
      '/portfolios/monkey-and-bird/monkey-and-bird-rogo.jpg',
    ],
  },
  {
    title: '大館神明社-絵馬デザイン',
    summary:
      '大館神明社様の干支絵馬デザイン\n2024年と2025年の干支絵馬を制作。2024年は辰年の絵馬に参拝者を見守る思いを込め、2025年は災害から人々を守り、竹のように力強く成長する未来を願い、蛇をデザインしました。',
    description:
      '<strong>「12年飾ることのできる大絵馬を描いてほしい」</strong>大館神明社様からのご依頼により、2024年からの干支絵馬のイラストを制作させていただきました。\n\n単なるイラストではなく、目的を持ったデザインにしてほしいというお客様の声を受け、辰年の絵馬には、新年の参拝者一人ひとりを正面から真っ直ぐに見つめ、2024年の1年間を見守り続けてくれるような思いを込めてデザインしました。\n\nまた、2025年の干支絵馬も制作させていただきました。2024年から続く予期せぬ自然災害の中、2025年には災害から人々を守り、竹のように力強く伸びていく人々の未来を守る願いを込め、要石を押さえつける蛇をデザインしました。\n\nこれらの絵馬が、参拝される方々の1年を見守り、災害から守る象徴となることを願っています。',
    thumbnail: '/images/portfolio/eto-ema-shinmei/shinmei-eto-ema.jpg',
    images: [
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-01.png',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-02.jpg',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-tatu-03.jpg',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-01.png',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-02.jpg',
      '/portfolios/eto-ema-shinmei/shinmei-eto-ema-mi-03.jpg',
    ],
  },
  {
    title: '太子堂八幡神社-絵馬デザイン',
    summary:
      '太子堂八幡神社様の絵馬デザイン\n2025年の干支絵馬は折り紙をモチーフにした遊び心のある蛇をデザインし、縁起絵馬は御神木とお社を柔らかい水彩画風で表現。通年使用できる伝統的で落ち着いたデザインに仕上げました。',
    description:
      '<strong>「一線を画す珍しいデザインにしたい」</strong>太子堂八幡神社様からのご依頼により、2025年からの干支絵馬と縁起絵馬のイラストを制作させていただきました。\n\n干支絵馬は、よくある白蛇のイラストではなく、遊び心のあるデザインにしたいというお客様のご要望を受け、折り紙をモチーフにしました。カラフルでありながらも落ち着いた色合いの蛇が、宝船のように皆様に縁起を運んでくるようなイメージでデザインしています。\n\nまた、縁起絵馬は、通年使用できるものとし、御神木を入れたデザインにしたいというご要望から、一目で太子堂八幡神社のものと分かるよう、お社と御神木を描きました。柔らかい水彩画風の色合いで、伝統的で落ち着いた雰囲気を表現しました。\n\nこれらの絵馬が、参拝される方々にとって特別なものとなることを願っています。',
    thumbnail: '/images/portfolio/eto-ema-taishido/taishido-eto-ema.jpg',
    images: [
      '/portfolios/eto-ema-taishido/taishido-eto-ema-mi-01.jpg',
      '/portfolios/eto-ema-taishido/taishido-kigan-ema-01.jpg',
    ],
  },
]

// アニメーション
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

// スタイルコンポーネント
const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

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
    width: 180px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
`

const WorkSection = styled.section<ReverseProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 8rem;
  align-items: center;

  ${(props) =>
    props.$isReverse &&
    `
    direction: rtl;
    > * {
      direction: ltr;
    }
  `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    direction: ltr;
    margin-bottom: 4rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 26rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 20rem;
  }
`

const WorkDetails = styled.div`
  padding: 2rem;
  height: 26rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.5rem;
    height: auto;
    min-height: 2rem;
  }
`

const WorkTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`

const SubTitle = styled.span`
  display: block;
  font-size: 1rem;
  color: #333;
`

const Summary = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #666;
  margin-bottom: 1.5rem;
  white-space: pre-line;
  flex-grow: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`

const DetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(255, 133, 202, 0.8) 0%,
    rgba(193, 151, 255, 0.8) 50%,
    rgba(133, 234, 255, 0.8) 100%
  );
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin-top: auto;
  align-self: flex-start;

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`

const ModalContent = styled.div`
  background: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  max-width: 1000px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  line-height: 1;
  z-index: 10;

  &:hover {
    color: #333;
  }
`

const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const ModalFadeImage = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 0.4s ease;
  pointer-events: ${(props) => (props.$isActive ? 'auto' : 'none')};
`

const ModalImage = styled(Image)`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const ModalTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
  color: #333;
  text-align: center;
  position: relative;
`

const ModalSubTitle = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #333;
`

const ModalQuote = styled.div`
  max-width: 720px;
  font-size: 0.9rem;
  color: #333;
  margin: 0 auto;
  font-weight: 620;
  line-height: 1.6;
  text-align: center;
`

const ModalDescription = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  white-space: pre-line;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
`

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`

const SlideImage = styled.div<ActiveProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  animation: ${(props) => (props.$isActive ? fadeIn : 'none')} 0.5s ease-in-out;
`

const SlideshowIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`

const Indicator = styled.button<ActiveProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${(props) => (props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)')};
  }
`

// スライドショーコンポーネント
const Slideshow: React.FC<SlideshowProps> = memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // スワイプ用の座標管理
  const touchStartX = React.useRef<number | null>(null)
  const touchEndX = React.useRef<number | null>(null)

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // スワイプ開始
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }
  // スワイプ移動
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX
  }
  // スワイプ終了
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const distance = touchStartX.current - touchEndX.current
    // しきい値（30px以上の移動でスワイプと判定）
    if (distance > 30) {
      // 左スワイプ（次へ）
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else if (distance < -30) {
      // 右スワイプ（前へ）
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <SlideshowContainer onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {images.map((image, index) => (
        <SlideImage key={image} $isActive={index === currentIndex} style={{ zIndex: index === currentIndex ? 1 : 0 }}>
          <Image
            src={image}
            alt={`slide-${index + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority={index === 0}
            style={{ objectFit: image.includes('rogo') ? 'contain' : 'cover' }}
          />
        </SlideImage>
      ))}
      <SlideshowIndicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            $isActive={index === currentIndex}
            onClick={() => handleIndicatorClick(index)}
            type='button'
            aria-label={`スライド ${index + 1} へ移動`}
          />
        ))}
      </SlideshowIndicators>
    </SlideshowContainer>
  )
})

Slideshow.displayName = 'Slideshow'

// メインコンポーネント
const PickUp: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkDetailsType | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // useCallbackで関数の再生成を防止
  const handleDetailClick = useCallback((work: WorkDetailsType) => {
    setSelectedWork(work)
    setCurrentImageIndex(0)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedWork(null)
    setCurrentImageIndex(0)
  }, [])

  const handleImageClick = useCallback(() => {
    if (selectedWork?.images && selectedWork.images.length > 0) {
      const images = selectedWork.images
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }, [selectedWork])

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentImageIndex(index)
  }, [])

  // --- ここからモーダル用スワイプロジック追加 ---
  // モーダル画像用スワイプ座標管理
  const modalTouchStartX = React.useRef<number | null>(null)
  const modalTouchEndX = React.useRef<number | null>(null)

  // モーダル画像: スワイプ開始
  const handleModalTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    modalTouchStartX.current = e.touches[0].clientX
  }
  // モーダル画像: スワイプ移動
  const handleModalTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    modalTouchEndX.current = e.touches[0].clientX
  }
  // モーダル画像: スワイプ終了
  const handleModalTouchEnd = () => {
    if (
      !selectedWork?.images ||
      selectedWork.images.length <= 1 ||
      modalTouchStartX.current === null ||
      modalTouchEndX.current === null
    )
      return
    const distance = modalTouchStartX.current - modalTouchEndX.current
    if (distance > 30) {
      // 左スワイプ（次へ）
      setCurrentImageIndex((prev) => (prev + 1) % selectedWork.images!.length)
    } else if (distance < -30) {
      // 右スワイプ（前へ）
      setCurrentImageIndex((prev) => (prev - 1 + selectedWork.images!.length) % selectedWork.images!.length)
    }
    modalTouchStartX.current = null
    modalTouchEndX.current = null
  }
  // --- ここまで ---

  return (
    <PortfolioContainer id='pick-up'>
      <PageTitle>Pick Up</PageTitle>
      {portfolioData.map((work, index) => (
        <WorkSection key={work.title} $isReverse={index % 2 !== 0}>
          <ImageContainer>
            {work.images ? (
              <Slideshow images={work.images} />
            ) : (
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={600}
                height={400}
                sizes='(max-width: 768px) 100vw, 50vw'
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
            )}
          </ImageContainer>
          <WorkDetails>
            <WorkTitle>
              {work.title === 'スナック喫茶 モンキー&バード' ? (
                <>
                  <SubTitle>スナック喫茶</SubTitle>
                  モンキー&バード
                </>
              ) : (
                work.title
              )}
            </WorkTitle>
            <Summary>{work.summary}</Summary>
            <DetailButton
              onClick={() => handleDetailClick(work)}
              type='button'
              aria-label={`${work.title}の詳細を見る`}
            >
              詳細を見る
            </DetailButton>
          </WorkDetails>
        </WorkSection>
      ))}

      {selectedWork && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
          >
            <CloseButton onClick={handleCloseModal} type='button' aria-label='モーダルを閉じる'>
              ×
            </CloseButton>
            <ModalImageContainer
              onClick={handleImageClick}
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              {selectedWork.images && selectedWork.images.length > 0 ? (
                selectedWork.images.map((img, idx) => (
                  <ModalFadeImage key={img} $isActive={idx === currentImageIndex}>
                    <ModalImage
                      src={img}
                      alt={`${selectedWork.title} - 画像${idx + 1}`}
                      fill
                      sizes='(max-width: 768px) 100vw, 80vw'
                      priority={idx === 0}
                      style={{
                        objectFit: selectedWork.title === 'スナック喫茶 モンキー&バード' ? 'contain' : 'cover',
                      }}
                    />
                  </ModalFadeImage>
                ))
              ) : (
                <ModalImage
                  src={selectedWork.thumbnail}
                  alt={selectedWork.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 80vw'
                  priority
                  style={{
                    objectFit: selectedWork.title === 'スナック喫茶 モンキー&バード' ? 'contain' : 'cover',
                  }}
                />
              )}
              {selectedWork.images && selectedWork.images.length > 1 && (
                <SlideshowIndicators>
                  {selectedWork.images.map((_, index) => (
                    <Indicator
                      key={index}
                      $isActive={index === currentImageIndex}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleIndicatorClick(index)
                      }}
                      type='button'
                      aria-label={`画像 ${index + 1} へ移動`}
                    />
                  ))}
                </SlideshowIndicators>
              )}
            </ModalImageContainer>
            <ModalTitle id='modal-title'>
              {selectedWork.title === 'スナック喫茶 モンキー&バード' ? (
                <>
                  <ModalSubTitle>スナック喫茶</ModalSubTitle>
                  モンキー&バード
                </>
              ) : (
                selectedWork.title
              )}
            </ModalTitle>
            <ModalQuote>{selectedWork.description.split('<strong>')[1]?.split('</strong>')[0]}</ModalQuote>
            <ModalDescription>{selectedWork.description.split('</strong>')[1]}</ModalDescription>
          </ModalContent>
        </ModalOverlay>
      )}
    </PortfolioContainer>
  )
}

// displayNameをexport defaultの直前で明示的に設定
PickUp.displayName = 'PickUp'

export default PickUp
