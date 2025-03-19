import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Team = () => {
    return (
        <Section>
            <TeamSectionTitle>Our Team</TeamSectionTitle>
            <TeamGrid>
                {teamMembers.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <ImageContainer>
                            <TeamMemberImage
                                src={member.image}
                                alt={member.name}
                                width={200}
                                height={200}
                                style={{
                                    objectPosition: member.name === "佐藤 文胤" ? "center 0%" : "center 40%",
                                    objectFit: member.name === "谷口 瑞季" ? "cover" : "cover",
                                    transform: member.name === "谷口 瑞季" ? "scale(1.3)" : "scale(1)"
                                }}
                            />
                            <ImageOverlay />
                        </ImageContainer>
                        <TeamMemberName>{member.name}</TeamMemberName>
                        <TeamMemberRole>{member.role}</TeamMemberRole>
                        <TeamMemberBio>
                            <CatchPhrase>{member.catchPhrase}</CatchPhrase>
                            <BioText>{member.bio}</BioText>
                        </TeamMemberBio>
                    </TeamMemberCard>
                ))}
            </TeamGrid>
        </Section>
    );
};

const teamMembers = [
    {
        name: "谷口 瑞季",
        role: "デザイナー/ イラストレーター",
        catchPhrase: "「明るく元気なアイデアマン！」",
        bio: "デザインの核となるクリエイティブなアイデアを担当します。唯一無二のイラストを用いて、お客様の思いに寄り添ったデザインを創造します。『こんなデザインがいい！』という思いを、ぜひ教えてください。",
        image: "/portfolios/member/taniguti-01.jpg"
    },
    {
        name: "佐藤 文胤",
        role: "webデザイナー / 営業担当",
        catchPhrase: "「デザインは誠実に打ち合わせは笑顔で！」",
        bio: "お客様の想いを形にするWebデザイナーです。お客様の思いや目的をヒアリングして、効果的で魅力的なデザインに仕上げます。些細なことでも、ぜひご相談ください！",
        image: "/portfolios/member/cheese-sato.jpg"
    },
    // {
    //     name: "佐藤 哲也",
    //     role: "webエンジニア",
    //     bio: "システムの基盤を支えるバックエンド開発を専門としています。デザインやお客様との直接のやり取りは行いませんが、技術面でプロジェクトを確実にサポートします。",
    //     image: "/portfolios/welcome-board/wata.jpg"
    // }
];

export default Team;

const Section = styled.section`
    margin-bottom: 4rem;
`;

const TeamSectionTitle = styled.h2`
    color: #333;
    font-size: 2.5rem;
    margin: 4rem auto;
    text-align: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 250px;
        height: 3px;
        background: linear-gradient(90deg,
            rgba(255, 133, 202, 0.5) 0%,
            rgba(193, 151, 255, 0.5) 50%,
            rgba(133, 234, 255, 0.5) 100%
        );
    }
`;

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 400px));
    gap: 4rem;
    padding: 0 4rem;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 3rem;
        padding: 0 2rem;
    }
`;

const TeamMemberCard = styled(motion.div)`
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    text-align: center;
    padding: 20px;

`;

const ImageContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 20px;
    margin: 20px auto;
`;

const TeamMemberImage = styled(Image)`
    object-fit: cover;
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 100%
    );
`;

const TeamMemberName = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-align: center;
`;

const TeamMemberRole = styled.p`
    color: #666;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-align: center;
`;

const TeamMemberBio = styled.div`
    margin: 2rem;
    text-align: left;
`;

const CatchPhrase = styled.p`
    color: #666;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    text-align: center;
`;

const BioText = styled.p`
    color: #666;
    font-size: 1rem;
    line-height: 1.8;
`;

