import styled from 'styled-components';
import HeroSection from './Hero';
import About from '../story/About';
import ShortContacts from '../contact/Short-Contacts';
import PickUp from '../pick-up/PickUp';
import Team from '../story/Team';
const Top = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <PickUp />
      <Team />
      <ShortContacts  />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;



export default Top;
