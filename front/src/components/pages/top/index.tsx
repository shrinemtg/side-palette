import styled from 'styled-components';
import HeroSection from './Hero';
import About from './About';

const Top = () => {
  return (
    <Container>
      <HeroSection />
      <About />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Top;
