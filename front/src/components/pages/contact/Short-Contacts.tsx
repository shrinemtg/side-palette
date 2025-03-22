import styled from 'styled-components';

const ShortContact = () => {
  return (
    <FixedCTAButton href="/contact">お問い合わせ</FixedCTAButton>
  );
};

const FixedCTAButton = styled.a`
    position: fixed;
    right: 2rem;
    bottom: 4rem;
    z-index: 1000;
    padding: 0.8rem 1rem;
    background: linear-gradient(120deg, #ff85ca, #85eaff);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    transition: all 0.3s ease;
    cursor: url("/images/hude.svg") 0 20, pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        animation: shake 0.5s ease-in-out;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    @media (max-width: 768px) {
        right: 1rem;
        bottom: 5rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }
`;

export default ShortContact;
