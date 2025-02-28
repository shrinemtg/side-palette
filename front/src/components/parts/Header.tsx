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
  width: 100%;
  background: linear-gradient(120deg,
    #ff85ca 0%,
    #ff826a 15%,
    #ff9b60 25%,
    #ffaf80 35%,
    #c197ff 50%,
    #85eaff 65%,
rgba(186, 220, 91, 0.9) 80%,
    #ffd96a 100%
  );
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
  color: white;
  cursor: url("/images/hude.svg") 0 20, pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  padding: 0.2rem 0;
  cursor: url("/images/hude.svg") 0 20, pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    opacity: 1;

    &::after {
      width: 100%;
    }
  }
`;
