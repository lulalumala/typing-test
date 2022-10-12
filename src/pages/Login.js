import Nav from "../components/Nav"
import styled from "styled-components"
import { useState } from "react"
const NavContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;
padding:4em 0; 
`
const Input=styled.input`
display:flex;
flex-direction:column;
outline:none;
border:none;
border-bottom:2px  solid #759F82;
width:40%;

`
const Para=styled.p``
const Button=styled.button`
padding:1em .5em;
border:none;
border-radius:5px;
background:#759F82;
color:white;
margin-left:15em;`


const Login = () => {
const [message, setMessage]=useState({
Name:"",
Email:"",
Password:""
})

const handleLogin=()=>{
try{ 
if(message.Name===""){
setMessage({...message, Name:"Please write your name"})
}
if(message.Email===""){
    setMessage({...message, Email:"Please write your email address"})
}

if(message.Password===""){
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
                    <Para>{message.Name}</Para>
                    <label>Name:</label>
                    <Input type="text" />
                    <Para>{message.Email}</Para>
                    <label>Email:</label>
                    <Input type="text" />
                    <Para>{message.Password}</Para>
                    <label>Password:</label>
                    <Input type="text" />
                    <Button onClick={handleLogin}>Login</Button>
                </Container>
            </NavContainer>
        </>
    )
}
export default Login