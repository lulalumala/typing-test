import styled from "styled-components"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import { addDoc, collection} from "firebase/firestore"
import app, { db } from "../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { FirebaseApp } from "firebase/app"

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
margin-left:25em;
margin-top:2em;
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

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
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

    const auth = getAuth(app);


    const handleSignup=async()=>{

      createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Succesfully registered")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
        // ..
      });

     

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
          if(input.password===""){
            setError({...error, passwordError:"Please write your password"})
          }
          if(input.confirmPassword===!password){
            setError({...error, confirmError:"Please confirm your password"})
          }
          else{
            // console.log(input)
            await addDoc(collection(db,"typing-test"),input)
            
            setInput({
                firstName:"",
                lastName:"",
                userName:"",
                // emailAddress:"",
                nationality:"",
                // password:"",
                confirmPassword:""
            })
          }
        }
        catch(error){
            console.log("error signing up:", error)

        }
    }



    function handUp(){
   
    }
    
    return(
        <>
        <Nav/>
        <SignContainer>
            <Container>
                <Para>{error.firstError}</Para>
                <Label>First Name:</Label>
                  <Input type="text" onChange={(event)=>setInput(prev=>({...prev, firstName: event.target.value}))}/>

                <Para>{error.lastError}</Para>
                <Label>Last Name:</Label>
                <Input type="text" onChange={(event)=>setInput(prev=>({...prev, lastName:event.target.value}))}/>

                <Para>{error.userError}</Para>
                <Label>UserName:</Label>
                <Input type="text" onChange={(event)=>setInput(prev=>({...prev, userName:event.target.value}))}/>

                <Para>{error.emailError}</Para>
                <Label>Email Address:</Label>
                <Input type="email address" onChange={(e)=>setEmail(e.target.value)}/>

                <Para>{error.nationalityError}</Para>
                <Label>Nationality:</Label>
                <Input type="text" onChange={(event)=>setInput(prev=>({...prev, nationality:event.target.value}))}/>

                <Para>{error.passwordError}</Para>
                <Label>Password:</Label>
                <Input type="text" onChange={(e)=>setPassword(e.target.value)}/>

                <Para>{error.confirmError}</Para>
                <Label>Confirm Password:</Label>
                <Input type="text" onChange={(event)=>setInput(prev=>({...prev,confirmPassword:event.target.value}))}/>
                <Button onClick={handleSignup}>Signup</Button>
               
            </Container>

{/* <Input type={"email"} placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
<Input type={"password"} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={handUp}>Signup</button> */}



        </SignContainer>
        </>
    )
}

export default Signup