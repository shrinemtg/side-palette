import styled from 'styled-components';
import HeroSection from './Hero';

const Top = () => {
  return (
    <Container>
      <HeroSection />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Top;
