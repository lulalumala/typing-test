import Nav from "../components/Nav"
import styled from "styled-components"

const HomeContainer = styled.div`
`
const SelectContainer=styled.div`
display:flex;
flex-direction:column;
gap:2em;
align-items:center;`
const Container=styled.div`
margin:0 auto;
width:80%;`
const HomeHead=styled.h2`
color:#759F82;`
const HomePara=styled.p``
const SelectOption=styled.select`
display:flex;
width:40%;
flex-direction:column;
outline:none;
border:none;
border:1px solid #759F82;
border-radius:10px;
padding:1em .5em;
`
const Button=styled.button`
padding:1em .5em;
background:#C8DBBE;
border-radius:5px;
border:none;
cursor:pointer;
color:white;

`



const Home = () => {

    return (
        <HomeContainer>
            
            <Nav/>
            <Container>
            <SelectContainer>
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
            <Button>Start Test</Button>
            </SelectContainer>
            </Container>
        </HomeContainer>
    )
}
export default Home