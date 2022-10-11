import Nav from "../components/Nav"
import styled from "styled-components"
const NavContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;
padding:3em 0; 
`
const Input=styled.input`
display:flex;
flex-direction:column;
outline:none;
border:none;
border-bottom:2px  solid #759F82;
width:40%;

`

const Login = () => {
    return (
        <>
            <Nav/>
            <NavContainer>
                <Container>
                    <label>Name:</label>
                    <Input type="text" />
                    <label>Email:</label>
                    <Input type="text" />
                    <label>Password:</label>
                    <Input type="text" />
                </Container>
            </NavContainer>
        </>
    )
}
export default Login