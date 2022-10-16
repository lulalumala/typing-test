import { Link } from "react-router-dom"
import Nav from "../components/Nav"
import styled from "styled-components"

const HomeContainer = styled.div`
background:#759F82;
height:100vh;
padding-top:5em;
`
const SelectContainer=styled.div`
display:flex;
flex-direction:column;
gap:2em;
align-items:center;
padding:2em 0;

`
const Container=styled.div`
margin:0 auto;
width:80%;
background:#EDE4E0;
border-radius:5px;
box-shadow:0 0 5px #EDE4E0;`
const HomeHead=styled.h2`
color:#759F82;`
const HomePara=styled.p`
color:#425F57;`
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

`

const Home = ({timeSelected, setTimeSelected}) => {

    return (
        <>
        <Nav/>
        <HomeContainer>
            <Container>
            <SelectContainer>
            <HomeHead>Check Your Typing Skills</HomeHead>
            <HomePara>Select your Test</HomePara>
           
                        <SelectOption onChange={(e) => 
                            setTimeSelected(e.target.value)
                        }>
                <option value="">Please select time</option>
                <option value={1}>1 minute</option>
                <option value={2}>2 minutes</option>
                <option value={3}>3 minutes</option>
            
            </SelectOption>
            <SelectOption>
                <option>Select Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                 
            </SelectOption>
            <Button><Link to="/typing">Start Test</Link></Button>
            </SelectContainer>
                </Container>
                {console.log(timeSelected)}
        </HomeContainer>
        </>
    )
}
export default Home