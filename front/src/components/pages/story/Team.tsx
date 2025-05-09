import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface TeamMember {
  name: string
  role: string
  catchPhrase: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: '谷口 瑞季',
    role: 'デザイナー/ イラストレーター',
    catchPhrase: '「明るく元気なアイデアマン！」',
    bio: `デザインの核となる、クリエイティブなアイデアを生み出すアイデアマンです。
お客様の「こんなデザインがいい！」という,ワクワクする想い、それを世界に一つだけのイラストで表現します。
手描きの温かさを大切に、デジタルならではの表現力も活かし、お客様の個性を最大限に引き出すデザインを創造します。
頭の中にあるイメージを、ぜひ私たちに教えてください。
最高のカタチで実現をお約束します！`,
    image: '/portfolios/member/taniguti-03.jpg',
  },
  {
    name: '佐藤 文胤',
    role: 'webデザイナー / 営業担当',
    catchPhrase: '「笑顔で寄り添うパートナー！」',
    bio: `お客様の想いを、デザインでカタチにするWebデザイナーです。
丁寧なヒアリングを大切に、お客様の描く理想や目的を深く理解することから始めます。
効果的な戦略と魅力的なデザインで、お客様のビジネスや活動をより一層輝かせるWebサイトを制作いたします。
どんな些細なお悩みでも構いませんので、
ぜひ一度、お話をお聞かせください！`,
    image: '/portfolios/member/cheese-sato.jpg',
  },
]

const Team: React.FC = () => {
  return (
    <Section>
      <TeamSectionTitle>Our Team</TeamSectionTitle>
      <TeamGrid>
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <TeamMemberImage
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                style={{
                  objectPosition: member.name === '佐藤 文胤' ? 'center 0%' : 'center 40%',
                  objectFit: 'cover',
                  transform: member.name === '谷口 瑞季' ? 'scale(1.6)' : 'scale(1)',
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
  )
}

export default Team

const Section = styled.section`
  margin-bottom: 4rem;
`

const TeamSectionTitle = styled.h2`
  color: #333;
  font-size: 2.5rem;
  margin: 2rem auto;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 133, 202, 0.5) 0%,
      rgba(193, 151, 255, 0.5) 50%,
      rgba(133, 234, 255, 0.5) 70%,
      rgba(177, 227, 59, 0.5) 90%,
      rgba(243, 188, 22, 0.5) 100%
    );
  }
`

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
`

const TeamMemberCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  text-align: center;
  padding: 1rem 0;
`

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
  margin: 1.2rem auto;
`

const TeamMemberImage = styled(Image)`
  object-fit: cover;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
`

const TeamMemberName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  text-align: center;
`

const TeamMemberRole = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 14rem;
    height: 1px;
    background: rgba(110, 52, 52, 0.2);
  }
`

const TeamMemberBio = styled.div`
  margin: 1.2rem 0;
  text-align: left;
`

const CatchPhrase = styled.p`
  color: #666;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: center;
`

const BioText = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.8;
  margin: 1.6rem;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.8rem;
  }
`
