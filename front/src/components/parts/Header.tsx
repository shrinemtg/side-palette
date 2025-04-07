import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const StyledImage = styled(Image)`
  filter: brightness(0) invert(1);
  margin: 0.6rem 0;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
`;

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
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 3px 1rem;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1001;
  margin-right: auto;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  cursor: url("/images/hude.svg") 0 20, pointer;
    @media (max-width: 767px) {
     gap: 0.2rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: white;

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease-in-out;
    backdrop-filter: blur(10px);
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 2.5rem;
    margin-left: auto;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  position: relative;
  padding: 0.2rem 0;
  cursor: url("/images/hude.svg") 0 20, pointer;

  @media (max-width: 767px) {
    font-size: 2rem;
    padding: 1rem;
  }

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

const MenuButton = styled.button<{ isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1.3rem;
    height: 1rem;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: white;
      transition: transform 0.3s ease-in-out;

      &:first-child {
        transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
      }

      &:nth-child(2) {
        opacity: ${props => props.isOpen ? '0' : '1'};
        transform: ${props => props.isOpen ? 'translateX(-100%)' : 'none'};
      }

      &:last-child {
        transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
      }
    }
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <LogoLink href="/">
            <Logo>Side Palette</Logo>
            <StyledImage
              src="/images/side-palette.png"
              alt="Side Palette Logo"
              width={36}
              height={36}
            />
          </LogoLink>
        </LogoContainer>
        <MenuButton isOpen={isOpen} onClick={handleMenuClick}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Nav isOpen={isOpen}>
          <NavLink href="/story" onClick={handleLinkClick}>Story</NavLink>
          <NavLink href="/service" onClick={handleLinkClick}>Service</NavLink>
          <NavLink href="/contact" onClick={handleLinkClick}>Contact</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
