import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    return (
        <AboutContainer>
            {/* ヘッダーセクション */}
                <PageTitle>About Us</PageTitle>
            <AboutUsSection>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LeadTitle>「思いを形に、未来を描く。」</LeadTitle>
                    <LeadText>
                    私たちは、お客様の胸に秘めた思いを丁寧に汲み取り、それを唯一無二のデザインとして形にするパートナーです。<br />
                    「こんなことをしてみたい」「でもどうしたらもっとよくなるのか分からない」そんな些細な悩みや夢を、ぜひお聞かせください。<br /><br />
                    私たちは、お客様の想いを救い上げ、一緒に考え、夢を現実にするお手伝いをさせていただきます。<br />
                あなたの思いが形になる瞬間を、共に創り上げましょう。
                    </LeadText>
                </motion.div>
            </AboutUsSection>

            {/* ミッションセクション */}
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

            {/* チーム紹介セクション */}
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


        </AboutContainer>
    );
};

// スタイルコンポーネント
const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
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
    font-size: 1rem;
    color: #666;
    max-width: 600px;
    margin: 2px auto;
`;

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


// ダミーデータ
const teamMembers = [
  {
      name: "谷口 瑞季",
      role: "クリエイティブディレクター / イラストレーター",
      bio: "明るく元気なアイデアマン！デザインの核となるクリエイティブなアイデアを担当します。唯一無二のイラストを用いて、お客様の思いに寄り添ったデザインを創造します。『こんなデザインがいい！』という思いを、ぜひ教えてください。",
      image: "/images/team-1.jpg"
  },
  {
      name: "佐藤 文胤",
      role: "webデザイナー / 営業担当",
      bio: "デザインは誠実に打ち合わせは笑顔で！お客様の想いを形にするWebデザイナーです。谷口のアイデアをお客様のビジョンに合わせて具体化し、効果的で魅力的なデザインに仕上げます。「どうしたら効果的かわからない」というお悩みも、ぜひご相談ください！",
      image: "/images/team-2.jpg"
  },
  {
      name: "",
      role: "バックエンドエンジニア",
      bio: "システムの基盤を支えるバックエンド開発を専門としています。デザインやお客様との直接のやり取りは行いませんが、技術面でプロジェクトを確実にサポートします。",
      image: "/images/team-3.jpg"
  }
];



export default About;
