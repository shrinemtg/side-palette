import styled from 'styled-components';
import Services from './Services';

const ServicePage = () => {
    return (
        <ServiceContainer>
            <Services />
        </ServiceContainer>
    );
};

const ServiceContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`;
export default ServicePage;
