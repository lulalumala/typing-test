import Nav from "../components/Nav"
import styled from "styled-components"
import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 
const NavContainer=styled.div`
`
const Container=styled.div`
margin:0 auto;
width:50%;
padding:4em 0; 

`
const Input=styled.input`
display:flex;
flex-direction:column;
justify-content:center;
outline:none;
border:none;
border-bottom:2px  solid #759F82;
width:40vw;
`
const Label=styled.p`
padding:1.5em 0;

`
const Para=styled.p``
const Button=styled.button`
padding:1em 2em;
border:none;
border-radius:5px;
background:#759F82;
color:white;
margin-left:20em;
margin-top:3em;`


const Login =() => {
const [message, setMessage]=useState({
Name:"",
Email:"",
Password:""
})
const [success,setSuccess]=useState("")

const [color,setColor]=useState("")

const handleLogin=async()=>{
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

else{
    await addDoc(collection(db, "typing-test"), message)
        setSuccess("Successfully logged in")
        setColor("#38E54D")}
        console.log("message")
        setMessage({
            Name:"",
            Email:"",
            Password:""
        })
}
catch(error){

    console.log("Unable to login:",error)
}
}


    return (
        <>
            <Nav/>
            <NavContainer>
                <Container>
                    <Para>{message.Name}</Para>
                    <Label>Name:</Label>
                    <Input type="text" />
                    <Para>{message.Email}</Para>
                    <Label>Email:</Label>
                    <Input type="text" />
                    <Para>{message.Password}</Para>
                    <Label>Password:</Label>
                    <Input type="text" />
                    <Button onClick={handleLogin}>Login</Button>

                </Container>
            </NavContainer>
        </>
    )
}
export default Login