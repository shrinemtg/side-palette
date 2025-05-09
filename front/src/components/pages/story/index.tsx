import styled from 'styled-components'
import About from './About'
import Team from './Team'
import ShortContacts from '../contact/Short-Contacts'

const StoryPage = () => {
  return (
    <StoryContainer>
      <About />
      <Team />
      <ShortContacts />
    </StoryContainer>
  )
}

const StoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

export default StoryPage
