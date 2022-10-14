import styled from "styled-components"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import { addDoc, collection} from "firebase/firestore"
import { db } from "../firebase"
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
const Para=styled.p``


const Signup=()=>{
    const [input, setInput]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        emailAddress:"",
        nationality:"",
        password:"",
        confirmPassword:""
    })

    const [message, setMessage]=useState()
    const [error,setError]=useState({
        firstError:"",
        lastError:"",
        userError:"",
        emailError:"",
        nationalityError:"",
        passwordError:"",
        confirmError:""
    })

    const handleSignup=async()=>{
        try{ 
          if(input.firstName===""){
            setError({...error, firstError:"Please write your first name"})
          }
          if(input.lastName===""){
            setError({...error, laststError:"Please write your last name"})
          }
          if(input.userName===""){
            setError({...error, userError:"Please write your username"})
          }
          if(input.emailAddress===""){
            setError({...error, emailError:"Please write your email address"})
          }
          if(input.nationality===""){
            setError({...error, nationalityError:"Please write your nationality"})
          }
          if(input.passwordError===""){
            setError({...error, passwordError:"Please write your password"})
          }
          if(input.confirmPassword===""){
            setError({...error, confirmError:"Please confirm your password"})
          }
          else{
            console.log(input)
            await addDoc(collection(db,"typing-test"),input)
            
            setInput({
                firstName:"",
                lastName:"",
                userName:"",
                emailAddress:"",
                nationality:"",
                password:"",
                confirmPassword:""
            })
          }
        }
        catch(error){
            console.log("error signing up:", error)

        }
    }
    return(
        <>
        <Nav/>
        <SignContainer>
            <Container>
                <Para>{error.firstError}</Para>
                <Label>First Name:</Label>
                  <Input type="text" onChange={(event)=>setInput({...input,firstName:event.target.value})}/>

                <Para>{error.lastError}</Para>
                <Label>Last Name:</Label>
                <Input type="text" onChange={(event)=>setInput({...input,lastName:event.target.value})}/>

                <Para>{error.userError}</Para>
                <Label>UserName:</Label>
                <Input type="text" onChange={(event)=>setInput({...input,userName:event.target.value})}/>

                <Para>{error.emailError}</Para>
                <Label>Email Address:</Label>
                <Input type="email address" onChange={(event)=>setInput({...input,emailAddress:event.target.value})}/>

                <Para>{error.nationalityError}</Para>
                <Label>Nationality:</Label>
                <Input type="text" onChange={(event)=>setInput({...input,nationality:event.target.value})}/>

                <Para>{error.passwordError}</Para>
                <Label>Password:</Label>
                <Input type="text" onChange={(event)=>setInput({...input,password:event.target.value})}/>

                <Para>{error.confirmError}</Para>
                <Label>Confirm Password:</Label>
                <Input type="text" onChange={(event)=>setInput({...input,confirmPassword:event.target.value})}/>
                <Button onClick={handleSignup}>Signup</Button>
               
            </Container>
        </SignContainer>
        </>
    )
}

export default Signup