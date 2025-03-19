import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Team = () => {
    return (
        <Section>
            <TeamSectionTitle>Our Team</TeamSectionTitle>
            <TeamGrid>
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index}>
                        <TeamMemberImage
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                        />
                        <TeamMemberName>{member.name}</TeamMemberName>
                        <TeamMemberRole>{member.role}</TeamMemberRole>
                        <TeamMemberBio>{member.bio}</TeamMemberBio>
                    </TeamMemberCard>
                ))}
            </TeamGrid>
        </Section>
    );
};

const teamMembers = [
    {
        name: "谷口 瑞季",
        role: "クリエイティブディレクター / イラストレーター",
        bio: "明るく元気なアイデアマン！デザインの核となるクリエイティブなアイデアを担当します。唯一無二のイラストを用いて、お客様の思いに寄り添ったデザインを創造します。『こんなデザインがいい！』という思いを、ぜひ教えてください。",
        image: "/portfolios/welcome-board/welcome-board-01.jpg"
    },
    {
        name: "佐藤 文胤",
        role: "webデザイナー / 営業担当",
        bio: "デザインは誠実に打ち合わせは笑顔で！お客様の想いを形にするWebデザイナーです。お客様の思いや目的をヒアリングして、効果的で魅力的なデザインに仕上げます。「どうしたら効果的かわからない」というお悩みも、ぜひご相談ください！",
        image: "/portfolios/welcome-board/welcome-board-01.jpg"
    },
    {
        name: "佐藤 哲也",
        role: "webエンジニア",
        bio: "システムの基盤を支えるバックエンド開発を専門としています。デザインやお客様との直接のやり取りは行いませんが、技術面でプロジェクトを確実にサポートします。",
        image: "/portfolios/welcome-board/wata.jpg"
    }
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`;

const TeamMemberCard = styled(motion.div)`
    text-align: center;
    padding: 1.5rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TeamMemberImage = styled(Image)`
    border-radius: 50%;
    margin-bottom: 1rem;
`;

const TeamMemberName = styled.h3`
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
    color: #666;
    margin-bottom: 1rem;
`;

const TeamMemberBio = styled.p`
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
`;

