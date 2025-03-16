import React from 'react';
import styled from 'styled-components';

interface CanvasToolsProps {
  isDrawingEnabled: boolean;
  setIsDrawingEnabled: (enabled: boolean) => void;
  isPaletteOpen: boolean;
  setIsPaletteOpen: (open: boolean) => void;
  lineWidth: number;
  setLineWidth: (width: number) => void;
  currentColor: string;
  isEraser: boolean;
  handleToolChange: (color: string | null) => void;
  handleReset: () => void;
}

const CanvasTools: React.FC<CanvasToolsProps> = ({
  isDrawingEnabled,
  setIsDrawingEnabled,
  isPaletteOpen,
  setIsPaletteOpen,
  lineWidth,
  setLineWidth,
  currentColor,
  isEraser,
  handleToolChange,
  handleReset
}) => {
  return (
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
          </g>
        </svg>
      </LightButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 1000;
  pointer-events: all;

  @media (max-width: 480px) {
    display: none;
  }
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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

const StyledInput = styled.input`
  width: 100px;
  height: 2px;
  -webkit-appearance: none;
  background: linear-gradient(to right, #ccc, #333);
  outline: none;
  border-radius: 2px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #333;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
      background: #666;
      transform: scale(1.2);
    }
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    background: #333;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
      background: #666;
      transform: scale(1.2);
    }
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  svg {
    width: 24px;
    height: 24px;
    opacity: ${props => props.isOn ? 1 : 0.5};
    transition: all 0.3s ease;
    fill: #666;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

    svg {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export default CanvasTools;