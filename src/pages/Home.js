import Nav from "../components/Nav"
import styled from "styled-components"

const HomeContainer = styled.div`

`
const Container=styled.div`
margin:0 auto;
width:80%;`
const HomeHead=styled.h2``
const HomePara=styled.p``
const SelectOption=styled.select`
display:flex;
flex-direction:column;
align-items:center;
`



const Home = () => {

    return (
        <HomeContainer>
            
            <Nav/>
            <Container>
            <HomeHead>Check Your Typing Skills</HomeHead>
            <HomePara>Select your Test</HomePara>
            <SelectOption>
                <option value="">Please select time</option>
                <option>1 minute</option>
                <option>2 minutes</option>
                <option>3 minutes</option>
            
            </SelectOption>
            <SelectOption>
                <option>Select Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                
            </SelectOption>
            </Container>
        </HomeContainer>
    )
}
export default Home