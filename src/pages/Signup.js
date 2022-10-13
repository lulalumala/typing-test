import styled from "styled-components"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
const SignContainer=styled.div``
const Container=styled.div`
margin:0 auto; 
width:60%;
`
const Label=styled.p`
padding:1em 0`
const Input=styled.input`
display:flex;
flex-direction:column;
justify-content:center;
width:50vw;
border:none;
outline:none;
border-bottom:2px  solid #759F82;`
const Button=styled.button`
padding:1em 2em;
background:#759F82;
border:none;
border-radius:5px; 
color:white;
margin-left:15em;
`


const Signup=()=>{
    const [state, setState]=useState=({
        firstName:"",
        lastName:"",
        userName:"",
        emailAddress:"",
        nationality:"",
        password:"",
        confirmPassword:""
    })
    
    const [error,setError]=useState({
        firstError:"",
        lastError:"",
        userError:"",
        emailError:"",
        nationalityError:"",
        passwordError:"",
        confirmError:""
    })
    return(
        <>
        <Nav/>
        <SignContainer>
            <Container>
                <Label>First Name:</Label>
                <Input type="text"/>
                <Label>Last Name:</Label>
                <Input type="text"/>
                <Label>UserName:</Label>
                <Input type="text"/>
                <Label>Email Address:</Label>
                <Input type="email address"/>
                <Label>Nationality:</Label>
                <Input type="text"/>
                <Label>Password:</Label>
                <Input type="password"/>
                <Label>Confirm Password:</Label>
                <Button>Signup</Button>
               
            </Container>
        </SignContainer>


        </>
    )
}
export default Signup