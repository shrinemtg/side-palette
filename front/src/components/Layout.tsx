import styled from 'styled-components';
import React, { ReactNode } from 'react';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Canvas from './pages/canvas';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  @media (max-width: 480px) {
    display: block;
  }
`;

const Content = styled.main`
  flex: 1;
  max-width: 100%;
  overflow-x: hidden;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Content>
          {children}
        </Content>
        <Canvas />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;