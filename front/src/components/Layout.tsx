import styled from 'styled-components';
import React, { ReactNode, useState } from 'react';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Margin = styled.div`
  width: 100px;
  min-height: 100vh;
  background-color: white;
  position: relative;

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
  padding: 20px;
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

const ColorButton = styled.button<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${props => props.color};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const EraserButton = styled(ColorButton)`
  background-color: #f3f4f6;
  border-color: #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '⌫';
    color: #6b7280;
    font-size: 14px;
  }
`;

const ResetButton = styled.button`
  padding: 4px 8px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  width: 80px;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const leftCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const rightCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [currentColor, setCurrentColor] = useState('#ff9a9e');
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(true);
  const [lineWidth, setLineWidth] = useState(8);

  const draw = (e: React.MouseEvent<HTMLDivElement>, canvas: HTMLCanvasElement | null) => {
    if (!canvas || !isDrawingEnabled) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = lineWidth * 2;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = lineWidth;
    }

    if (lastPos.x === 0 && lastPos.y === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.moveTo(lastPos.x, lastPos.y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPos({ x, y });
  };

  const handleMouseLeave = () => {
    setLastPos({ x: 0, y: 0 });
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
    const leftCanvas = leftCanvasRef.current;
    const rightCanvas = rightCanvasRef.current;

    if (leftCanvas && rightCanvas) {
      leftCanvas.width = 100;
      leftCanvas.height = window.innerHeight;
      rightCanvas.width = 100;
      rightCanvas.height = window.innerHeight;
    }
  }, []);

  return (
    <LayoutContainer>
      <Margin
        onMouseMove={(e) => draw(e, leftCanvasRef.current)}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={leftCanvasRef} />
      </Margin>
      <Content>
        {children}
      </Content>
      <Margin
        onMouseMove={(e) => draw(e, rightCanvasRef.current)}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={rightCanvasRef} />
      </Margin>
      <ButtonContainer>
        <SliderContainer>
          <span style={{ color: '#4b5563', fontSize: '12px' }}>太さ:</span>
          <StyledInput
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
          />
          <span style={{ color: '#4b5563', fontSize: '12px' }}>{lineWidth}px</span>
        </SliderContainer>
        <ColorButton
          color="#ff9a9e"
          onClick={() => handleToolChange('#ff9a9e')}
          title="ピンク"
          style={{ opacity: !isEraser && currentColor === '#ff9a9e' ? 1 : 0.6 }}
        />
        <ColorButton
          color="#fad0c4"
          onClick={() => handleToolChange('#fad0c4')}
          title="ライトピンク"
        />
        <ColorButton
          color="#a1c4fd"
          onClick={() => handleToolChange('#a1c4fd')}
          title="ライトブルー"
        />
        <ColorButton
          color="#81d6e6"
          onClick={() => handleToolChange('#81d6e6')}
          title="スカイブルー"
        />
        <ColorButton
          color="#92fe9d"
          onClick={() => handleToolChange('#92fe9d')}
          title="ライトグリーン"
        />
        <EraserButton
          color="transparent"
          onClick={() => handleToolChange(null)}
          title="消しゴム"
          style={{ opacity: isEraser ? 1 : 0.6 }}
        />
        <ResetButton
          onClick={() => setIsDrawingEnabled(!isDrawingEnabled)}
          style={{
            backgroundColor: isDrawingEnabled ? '#ef4444' : '#9ca3af',
            marginRight: '8px'
          }}
        >
          {isDrawingEnabled ? '描画停止' : '描画開始'}
        </ResetButton>
        <ResetButton onClick={handleReset}>リセット</ResetButton>
      </ButtonContainer>
    </LayoutContainer>
  );
};

export default Layout;