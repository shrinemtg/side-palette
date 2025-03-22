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
                        私たちは、お客様の胸に秘めた思いを丁寧に汲み取り、それを唯一無二のデザインとして形にするパートナーです。<br /><br />
                        「こんなことをしてみたい」「でもどうしたらもっとよくなるのか分からない」そんな些細な悩みや夢を、ぜひお聞かせください。<br /><br />
                        私たちは、お客様の想いを救い上げ、一緒に考え、夢を現実にするお手伝いをさせていただきます。<br /><br />
                        あなたの思いが形になる瞬間を、共に創り上げましょう。
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
    margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
    color: #333;
    text-align: center;
    font-size: 3.5rem;
    position: relative;
    margin: 2rem ;
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
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
    }
`;

const LeadTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
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
    font-size: 1rem;
    color: #666;
    max-width: 600px;
    margin: 20px auto;
`;

export default About;
