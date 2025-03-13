import styled from 'styled-components';
import { motion } from 'framer-motion';

interface NewsItem {
    date: string;
    title: string;
    description: string;
}

interface NewsProps {
    newsItems: NewsItem[];
}

const News = ({ newsItems }: NewsProps) => {
    return (
        <Section>
            <SectionTitle>News</SectionTitle>
            <NewsContainer>
                {newsItems.map((news, index) => (
                    <NewsCard key={index}>
                        <NewsDate>{news.date}</NewsDate>
                        <NewsContent>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsDescription>{news.description}</NewsDescription>
                        </NewsContent>
                    </NewsCard>
                ))}
            </NewsContainer>
        </Section>
    );
};

// スタイルコンポーネント
const Section = styled.section`
    margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #333;
`;

const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
`;

const NewsCard = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

const NewsDate = styled.div`
    min-width: 100px;
    color: #666;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 2;
    position: relative;
    margin-right: 1.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg,
            rgba(255, 133, 202, 0.5) 0%,
            rgba(193, 151, 255, 0.5) 50%,
            rgba(133, 234, 255, 0.5) 100%
        );
    }
`;

const NewsContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const NewsTitle = styled.h3`
    color: #333;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.5;
`;

const NewsDescription = styled.p`
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
`;

export default News;