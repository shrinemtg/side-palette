import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoContainer>
            <LogoText>Side Palette</LogoText>
            <StyledImage
              src="/images/side-palette.png"
              alt="Side Palette Logo"
              width={30}
              height={30}
            />
          </LogoContainer>
          <CompanyInfo>
            〒017-0867<br />
            千葉県松戸市北小金きよしガ丘5-5-1<br />
            TEL: 080-1699-0692
          </CompanyInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Menu</FooterTitle>
          <FooterNav>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/works">Works</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterLinks>
          <SmallLink onClick={() => setShowPrivacyModal(true)}>プライバシーポリシー</SmallLink>
          <SmallLink onClick={() => setShowTermsModal(true)}>利用規約</SmallLink>
        </FooterLinks>
        <Copyright>© {currentYear} Side Palette All Rights Reserved.</Copyright>
      </FooterBottom>

      {/* プライバシーポリシーモーダル */}
      <AnimatePresence>
        {showPrivacyModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPrivacyModal(false)}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalTitle>プライバシーポリシー</ModalTitle>
              <ModalText>
                プライバシーポリシーの内容をここに記載します。
                実際の内容に置き換えてください。
              </ModalText>
              <CloseButton onClick={() => setShowPrivacyModal(false)}>閉じる</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {/* 利用規約モーダル */}
      <AnimatePresence>
        {showTermsModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTermsModal(false)}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalTitle>利用規約</ModalTitle>
              <ModalText>
                利用規約の内容をここに記載します。
                実際の内容に置き換えてください。
              </ModalText>
              <CloseButton onClick={() => setShowTermsModal(false)}>閉じる</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
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
  margin-top: 100px;
  padding: 2rem 2rem 1rem;
  color: white;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledImage = styled(Image)`
  filter: brightness(0) invert(1);
`;

const LogoText = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const CompanyInfo = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  width: fit-content;
  cursor: url("/images/hude.svg") 0 20, pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  width: fit-content;
  cursor: url("/images/hude.svg") 0 20, pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SmallLink = styled.button`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  background: none;
  border: none;
  cursor: url("/images/hude.svg") 0 20, pointer;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  color: #333;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ModalText = styled.div`
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Footer;
