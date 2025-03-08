import styled from 'styled-components';

const ShortContact = () => {
  return (
    <CTASection>
      <CTATitle>一緒に素晴らしいものを作りましょう</CTATitle>
      <CTAButton href="/contact">お問い合わせ</CTAButton>
    </CTASection>
  );
};


const CTASection = styled.section`
    text-align: center;
    padding: 4rem 0;
    background: linear-gradient(120deg,
        rgba(255, 133, 202, 0.1) 0%,
        rgba(193, 151, 255, 0.1) 50%,
        rgba(133, 234, 255, 0.1) 100%
    );
    border-radius: 20px;
`;

const CTATitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
`;

const CTAButton = styled.a`
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(120deg, #ff85ca, #85eaff);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    transition: transform 0.3s ease;
    cursor: url("/images/hude.svg") 0 20, pointer;

    &:hover {
        transform: translateY(-2px);
    }
`;
export default ShortContact;
