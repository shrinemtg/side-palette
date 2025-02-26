import React from 'react';
import styled from 'styled-components';

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <h2>ポートフォリオ</h2>
      <PortfolioGrid>
        <PortfolioItem>プロジェクト1</PortfolioItem>
        <PortfolioItem>プロジェクト2</PortfolioItem>
        <PortfolioItem>プロジェクト3</PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.section`
  padding: 40px 20px;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const PortfolioItem = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export default Portfolio;