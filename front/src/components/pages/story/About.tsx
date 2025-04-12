import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <AboutContainer id="story">
            {/* ヘッダーセクション */}
            <PageTitle>Our Story</PageTitle>
            <AboutUsSection>
                {isClient ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <LeadTitle>「思いを形に、未来を描く。」</LeadTitle>
                        <LeadText>
                        私たちSide Paletteは、お客様の思いを丁寧に汲み取り<br/>

                        それを唯一無二のデザインやイラストとして<br/>
                        形にするパートナーです。<br/><br/><br/>

                        「他とは違うオリジナルなものが欲しい…」<br/>
                        「デザインをもっとよくしたい...」<br/><br/><br/>
                        そんなお客様のお悩みをぜひ、私たちにお聞かせください<br/>
                        共に考え、<br/>
                        あなたの思いを形にするお手伝いをさせていただきます。
                        </LeadText>
                    </motion.div>
                ) : (
                    <div>
                        <LeadTitle>「思いを形に、未来を描く。」</LeadTitle>
                        <LeadText>
                        私たちSide Paletteは、お客様の思いを丁寧に汲み取り<br/>

                        それを唯一無二のデザインやイラストとして<br/>
                        形にするパートナーです。<br/><br/><br/>

                        「他とは違うオリジナルなものが欲しい…」<br/>
                        「デザインをもっとよくしたい...」<br/><br/><br/>
                        そんなお客様のお悩みをぜひ、私たちにお聞かせください<br/>
                        共に考え、<br/>
                        あなたの思いを形にするお手伝いをさせていただきます。
                        </LeadText>
                    </div>
                )}
            </AboutUsSection>

        </AboutContainer>
    );
};

// スタイルコンポーネント
const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 30px auto;
    padding: 1rem;
`;

const AboutUsSection = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
   background: linear-gradient(120deg,
      rgba(255, 133, 202, 0.2) 0%,
      rgba(193, 151, 255, 0.2) 50%,
      rgba(133, 234, 255, 0.2) 70%,
      rgba(177, 227, 59, 0.2) 90%,
      rgba(243, 188, 22, 0.2) 100%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
    font-size: 1.1rem;
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
    font-size: 1rem;
    color: #666;
    max-width: 600px;
    margin: 2rem auto;
`;

export default About;
