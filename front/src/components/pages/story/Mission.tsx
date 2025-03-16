import styled from 'styled-components';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <Section>
            <MissionSectionTitle>Our Mission</MissionSectionTitle>
            <MissionContainer>
                <MissionCard
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <MissionTitle>創造性</MissionTitle>
                    <MissionText>独創的なアイデアと革新的なアプローチで、新しい価値を創造します。</MissionText>
                </MissionCard>
                <MissionCard
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <MissionTitle>品質</MissionTitle>
                    <MissionText>最高の品質とユーザー体験を提供することを約束します。</MissionText>
                </MissionCard>
                <MissionCard
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <MissionTitle>協力</MissionTitle>
                    <MissionText>お客様と密接に協力し、目標達成に向けて共に歩みます。</MissionText>
                </MissionCard>
            </MissionContainer>
        </Section>
    );
};

const Section = styled.section`
    margin-bottom: 4rem;
`;

const MissionSectionTitle = styled.h2`
    font-size: 2.5rem;
    margin: 4rem auto;
    text-align: center;
    color: #333;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 3px;
        background: linear-gradient(90deg,
            rgba(255, 133, 202, 0.5) 0%,
            rgba(193, 151, 255, 0.5) 50%,
            rgba(133, 234, 255, 0.5) 100%
        );
    }
`;

const MissionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

const MissionCard = styled(motion.div)`
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const MissionTitle = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #333;
`;

const MissionText = styled.p`
    color: #666;
    line-height: 1.6;
`;

export default Mission;