import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <AboutContainer id="story">
            {/* ヘッダーセクション */}
            <PageTitle>Our Story</PageTitle>
            <AboutUsSection>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LeadTitle>「思いを形に、未来を描く。」</LeadTitle>
                    <LeadText>
                    私たちはお客様の描く未来への羅針盤となり、その想いを唯一無二のデザインで現実へと導くクリエイティブパートナーです。<br/><br/>
                    「こんなことを実現したい」「でも、具体的にどう進めればいいか分からない」そんなアイデアの種や、まだ輪郭のぼやけた夢も、まずは私たちにご相談ください。<br/><br/>
                    私たちは、お客様の想いを深く理解し、専門的な知識と経験を活かして、実現可能な具体的なプランニングからデザイン制作まで、一貫してサポートいたします。お客様の潜在的なニーズを引き出し、想像を超える最高のデザインをご提案することをお約束します。<br/>
                    あなたの熱い想いを、確かなカタチに変え、共に未来を切り拓きましょう。最初の一歩を、私たちがお手伝いします。<br/>
                    </LeadText>
                </motion.div>
            </AboutUsSection>

        </AboutContainer>
    );
};

// スタイルコンポーネント
const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 30px auto;
    padding: 2rem;
`;

const AboutUsSection = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
    background: linear-gradient(120deg,
        rgba(255, 133, 202, 0.1) 0%,
        rgba(193, 151, 255, 0.1) 50%,
        rgba(133, 234, 255, 0.1) 100%
    );
    border-radius: 20px;
`;

const PageTitle = styled.h1`
    color: #333;
    text-align: center;
    font-size: 2.5rem;
    position: relative;
    margin: 2rem auto ;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 12rem;
        height: 3px;
    background: linear-gradient(90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
    }
`;

const LeadTitle = styled.h2`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    background: linear-gradient(120deg,
        #ff85ca 0%,
        #c197ff 50%,
        #85eaff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const LeadText = styled.p`
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    max-width: 600px;
    margin: 2rem;
`;

export default About;
