import Nav from "../components/Nav"
import styled from "styled-components"
import { useState } from "react"
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
const [message, setMessage]=useState({
Name:"",
Email:"",
Password:""
})

const handleLogin=()=>{
try{ 
if(message.Name==""){
setMessage({...message, Name:"Please write your name"})
}
if(message.Email==""){
    setMessage({...message, Email:"Please write your email address"})
}

if(message.Password==""){
    setMessage({...message,Password:"Please input your password"})
}
}
catch{

}
}

    return (
        <>
            <Nav/>
            <NavContainer>
                <Container>
                    <Para></Para>
                    <label>Name:</label>
                    <Input type="text" />
                    <Para></Para>
                    <label>Email:</label>
                    <Input type="text" />
                    <Para></Para>
                    <label>Password:</label>
                    <Input type="text" />
                </Container>
            </NavContainer>
        </>
    )
}
export default Login