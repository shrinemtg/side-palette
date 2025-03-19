import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CanvasTools from './CanvasTools';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [currentColor, setCurrentColor] = useState('#ffd96a');
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);
  const [lineWidth, setLineWidth] = useState(8);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawingEnabled) return;
    setIsDrawing(true);

    const canvas = canvasRef.current;
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

  const draw = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
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
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <CanvasContainer>
      <CanvasWrapper
        isDrawing={isDrawing}
        isDrawingEnabled={isDrawingEnabled}
        onMouseDown={handleMouseDown}
        onMouseMove={draw}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} />
      </CanvasWrapper>
      <CanvasTools
        isDrawingEnabled={isDrawingEnabled}
        setIsDrawingEnabled={setIsDrawingEnabled}
        isPaletteOpen={isPaletteOpen}
        setIsPaletteOpen={setIsPaletteOpen}
        lineWidth={lineWidth}
        setLineWidth={setLineWidth}
        currentColor={currentColor}
        isEraser={isEraser}
        handleToolChange={handleToolChange}
        handleReset={handleReset}
      />
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: darken;
`;

const CanvasWrapper = styled.div<{ isDrawing: boolean; isDrawingEnabled: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: ${props => props.isDrawingEnabled ? 'all' : 'none'};
  cursor: ${props => props.isDrawing ? 'url("/images/hude.svg") 0 20, auto' : 'url("/images/hude.svg") 0 20, pointer'};

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export default Canvas;