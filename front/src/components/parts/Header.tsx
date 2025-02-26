import styled from 'styled-components';
import Image from 'next/image';

const StyledImage = styled(Image)`
  filter: brightness(0) invert(1);
`;

const Header: React.FC = () => {
    return (
      <HeaderContainer>
        <LogoContainer>
            <Logo>Side Palette</Logo>
            <StyledImage
              src="/images/side-palette.png"
              alt="Side Palette Logo"
              width={40}
              height={40}
            />
        </LogoContainer>
        <Nav>
          <NavLink href="#philosophy">philosophy</NavLink>
          <NavLink href="#illustration">illustration</NavLink>
          <NavLink href="#design">design</NavLink>
          <NavLink href="#contact">contact</NavLink>
        </Nav>
      </HeaderContainer>
    );
  };

  export default Header;

const HeaderContainer = styled.header`
  background: linear-gradient(90deg,
    #ff9a9e 0%,
    #fad0c4 20%,
    #fad0c4 40%,
    #a1c4fd 60%,
    #81d6e6 80%,
    #92fe9d 100%
  );
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;


