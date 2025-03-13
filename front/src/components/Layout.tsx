import styled from 'styled-components';
import React, { ReactNode, useState } from 'react';
import Header from './parts/Header';
import Footer from './parts/Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const Margin = styled.div<{ isDrawing: boolean }>`
  width: 100px;
  background-color: white;
  position: relative;
  cursor: ${props => props.isDrawing ? 'url("/images/hude.svg") 0 20, auto' : 'url("/images/hude.svg") 0 20, pointer'};

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.main`
  flex: 1;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 1000;

`;

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const ColorButton = styled.button<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${props => props.color};
  cursor: url("/images/hude.svg") 0 20, pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border-bottom: 1px solid gray;
  border-radius: 20px;

  &:hover {
    transform: scale(1.5);
  }
`;

const EraserButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url('/images/eraser.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ResetButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: all 0.3s ease;
  box-shadow: 0  2px 4px rgba(0, 0, 0, 0.2);


  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url('/images/houki.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s ease;
    opacity: 0.7;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 1;
      transform: rotate(-15deg);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  background: white;
  padding: 6px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input<{ value: number }>`
  width: 120px;
  height: 4px;
  -webkit-appearance: none;
  background: linear-gradient(to right, #00e5c5 0%, #00e5c5 ${props => props.value * 5.26}%, #e5e7eb ${props => props.value * 5.26}%, #e5e7eb 100%);
  outline: none;
  border-radius: 2px;
  cursor: url("/images/hude.svg") 0 20, pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: white;
    border: 2px solid #00e5c5;
    border-radius: 50%;
    cursor: url("/images/hude.svg") 0 20, pointer;
    transition: all 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #00e5c5;
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: white;
    border: 2px solid #00e5c5;
    border-radius: 50%;
    cursor: url("/images/hude.svg") 0 20, pointer;
    transition: all 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #00e5c5;
      transform: scale(1.1);
    }
  }
`;

const LightButton = styled.button<{ isOn: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: all 0.3s ease;
  margin-right: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
    path {
      fill: ${props => props.isOn ? '#ffd96a' : '#9ca3af'};
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;

const PaletteContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  width: ${props => props.isOpen ? 'auto' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
`;

const PaletteButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url('/images/palette.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;
    transition: all 0.3s ease;
    filter: invert(63%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(99%) contrast(90%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const leftCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const rightCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [currentColor, setCurrentColor] = useState('#ffd96a');
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(true);
  const [lineWidth, setLineWidth] = useState(8);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawingEnabled) return;
    setIsDrawing(true);

    const canvas = e.currentTarget.querySelector('canvas');
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      setLastPos({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setLastPos({ x: 0, y: 0 });
  };

  const draw = (e: React.MouseEvent<HTMLDivElement>, canvas: HTMLCanvasElement | null) => {
    if (!canvas || !isDrawingEnabled || !isDrawing) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = lineWidth * 2;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = lineWidth;
    }

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPos({ x, y });
  };

  const handleReset = () => {
    const leftCanvas = leftCanvasRef.current;
    const rightCanvas = rightCanvasRef.current;
    if (leftCanvas && rightCanvas) {
      const ctx = leftCanvas.getContext('2d');
      const rightCtx = rightCanvas.getContext('2d');
      if (ctx && rightCtx) {
        ctx.clearRect(0, 0, leftCanvas.width, leftCanvas.height);
        rightCtx.clearRect(0, 0, rightCanvas.width, rightCanvas.height);
      }
    }
  };

  const handleToolChange = (color: string | null) => {
    if (color === null) {
      setIsEraser(true);
    } else {
      setIsEraser(false);
      setCurrentColor(color);
    }
  };

  React.useEffect(() => {
    const updateCanvasSize = () => {
      const leftCanvas = leftCanvasRef.current;
      const rightCanvas = rightCanvasRef.current;

      if (leftCanvas && rightCanvas) {
        const dpr = window.devicePixelRatio || 1;
        const width = 100;
        const height = window.innerHeight;

        leftCanvas.width = width * dpr;
        leftCanvas.height = height * dpr;
        leftCanvas.style.width = `${width}px`;
        leftCanvas.style.height = `${height}px`;

        rightCanvas.width = width * dpr;
        rightCanvas.height = height * dpr;
        rightCanvas.style.width = `${width}px`;
        rightCanvas.style.height = `${height}px`;

        const leftCtx = leftCanvas.getContext('2d');
        const rightCtx = rightCanvas.getContext('2d');
        if (leftCtx && rightCtx) {
          leftCtx.scale(dpr, dpr);
          rightCtx.scale(dpr, dpr);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Margin
          isDrawing={isDrawing}
          onMouseDown={handleMouseDown}
          onMouseMove={(e) => draw(e, leftCanvasRef.current)}
          onMouseUp={handleMouseUp}
        >
          <canvas ref={leftCanvasRef} />
        </Margin>
        <Content>
          {children}
        </Content>
        <Margin
          isDrawing={isDrawing}
          onMouseDown={handleMouseDown}
          onMouseMove={(e) => draw(e, rightCanvasRef.current)}
          onMouseUp={handleMouseUp}
        >
          <canvas ref={rightCanvasRef} />
        </Margin>
      </MainContent>
      <ButtonContainer>
        <PaletteWrapper>
          <PaletteButton
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
            title="パレット"
          />
          <PaletteContainer isOpen={isPaletteOpen}>
            <SliderContainer>
              <StyledInput
                type="range"
                min="1"
                max="20"
                value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
              />
            </SliderContainer>
            <ColorButton
              color="#ffd96a"
              onClick={() => handleToolChange('#ffd96a')}
              title="イエロー"
              style={{ opacity: !isEraser && currentColor === '#ffd96a' ? 1 : 0.6 }}
            />
            <ColorButton
              color="#c7eb65"
              onClick={() => handleToolChange('#c7eb65')}
              title="ライムグリーン"
            />
            <ColorButton
              color="#85eaff"
              onClick={() => handleToolChange('#85eaff')}
              title="スカイブルー"
            />
            <ColorButton
              color="#c197ff"
              onClick={() => handleToolChange('#c197ff')}
              title="パープル"
            />
            <ColorButton
              color="#ff9b60"
              onClick={() => handleToolChange('#ff9b60')}
              title="オレンジ"
            />
            <ColorButton
              color="#ffaf80"
              onClick={() => handleToolChange('#ffaf80')}
              title="ライトオレンジ"
            />
            <ColorButton
              color="#ff826a"
              onClick={() => handleToolChange('#ff826a')}
              title="コーラル"
            />
            <ColorButton
              color="#ff85ca"
              onClick={() => handleToolChange('#ff85ca')}
              title="ピンク"
            />
          </PaletteContainer>
        </PaletteWrapper>
        <EraserButton
          onClick={() => handleToolChange(null)}
          title="消しゴム"
          style={{ opacity: isEraser ? 1 : 0.6 }}
        />
        <ResetButton
          onClick={handleReset}
          title="リセット"
        />
        <LightButton
          isOn={isDrawingEnabled}
          onClick={() => setIsDrawingEnabled(!isDrawingEnabled)}
          title={isDrawingEnabled ? '描画停止' : '描画開始'}
        >
          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="M474.457,202.594c-2.362,0-4.65,0.248-6.914,0.647L331.808,58.746c0.766-2.956,1.175-5.997,1.175-9.191
                c0-20.713-16.808-37.521-37.521-37.521c-20.734,0-37.542,16.808-37.542,37.521c0,2.999,0.388,5.922,1.078,8.717l-22.201,23.032
                L199.999,43.88L51.157,137.261l48.88,49.722c-5.394,14.639-2.417,31.674,9.234,43.53c11.673,11.856,28.664,15.135,43.39,9.978
                l48.88,49.722l95.916-147.236l-32.31-32.849l22.914-23.766c2.384,0.496,4.876,0.734,7.4,0.734c2.363,0,4.672-0.238,6.904-0.69
                l135.746,144.517c-0.744,2.955-1.186,6.02-1.186,9.191c0,9.127,3.246,17.476,8.673,23.993l-45.87,151.701H196.666
                c-23.248,0-42.096,18.814-42.096,42.062c0,23.248,18.847,42.096,42.096,42.096h207.42c23.237,0,42.062-18.847,42.062-42.096
                c0-9.795-3.484-18.696-9.094-25.838l47.058-155.692C500.154,272.09,512,257.484,512,240.114
                C512,219.401,495.192,202.594,474.457,202.594z M295.462,67.517c-9.924,0-17.962-8.038-17.962-17.962
                c0-9.904,8.038-17.93,17.962-17.93c9.904,0,17.94,8.027,17.94,17.93C313.403,59.479,305.366,67.517,295.462,67.517z
                M474.457,258.087c-9.902,0-17.94-8.069-17.94-17.972c0-9.904,8.038-17.962,17.94-17.962c9.926,0,17.962,8.059,17.962,17.962
                C492.419,250.018,484.383,258.087,474.457,258.087z"/>
              <path d="M119.348,283.439c-4.25,0-7.692,3.441-7.692,7.692v42.343c0,4.272,3.442,7.713,7.692,7.713
                c4.251,0,7.692-3.441,7.692-7.713v-42.343C127.04,286.88,123.599,283.439,119.348,283.439z"/>
              <path d="M57.749,221.84c0-4.251-3.442-7.703-7.692-7.703H7.692c-4.25,0-7.692,3.452-7.692,7.703
                c0,4.251,3.442,7.681,7.714,7.681h42.343C54.307,229.52,57.749,226.09,57.749,221.84z"/>
              <path d="M64.901,265.402l-29.936,29.925c-3.022,2.999-3.022,7.876-0.022,10.897c3.022,3.02,7.886,3.02,10.907,0
                l29.937-29.958c3.02-2.999,3.02-7.866,0-10.864C72.787,262.38,67.922,262.38,64.901,265.402z"/>
            </g>
          </svg>
        </LightButton>
      </ButtonContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;