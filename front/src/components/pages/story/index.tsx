import styled from 'styled-components';
import About from './About';
import Team from './Team';
import ShortContacts from '../contact/Short-Contacts';

const StoryPage = () => {
    return (
        <StoryContainer>
            <About />
            <Team />
            <ShortContacts />
        </StoryContainer>
    );
};

const StoryContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;

export default StoryPage;
