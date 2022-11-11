import styled from "styled-components"
import { useState, useEffect } from "react"
import Nav from "../components/Nav"
import { addDoc, collection} from "firebase/firestore"
import app, { db } from "../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"

// import { FirebaseApp } from "firebase/app"

const SignContainer=styled.div``
const Container=styled.div`
margin:0 auto; 
width:60%;

`
const SignForm=styled.div`
border:2px solid #EDE4E0;
margin-top:2em;
padding-bottom:2em;

`
const Label=styled.p`
padding:1em 0`
const Input=styled.input`
display:flex;
margin: 0 3em ;
padding-top:3em;
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
font-weight:bold;
font-size:medium;
`
const Para=styled.p`
color:red;
padding-left:2.5em;`


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
            setError(prev=>({...prev, firstError:"Please write your first name"}))
          }
          if(input.lastName===""){
            setError(prev=>({...prev, lastError:"Please write your last name"}))
          }
          if(input.userName===""){
            setError(prev=>({...prev, userError:"Please write your username"}))
          }
          if(input.emailAddress===""){
            setError(prev=>({...prev, emailError:"Please write your email address"}))
          }
          if(input.nationality===""){
            setError(prev=>({...prev, nationalityError:"Please write your nationality"}))
          }
          if(input.password===""){
            setError(prev=>({...prev, passwordError:"Please write your password"}))
          }
          if(input.confirmPassword===""){
            setError(prev=>({...prev, confirmError:"Please confirm your password"}))
          }
          if (input.confirmPassword !==input.password){
          setError(prev=>({...prev, confirmError:"Please input the correct password"}))
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



    // function handUp(){
   
    // }
    
    return(
        <>
        <Nav/>
        <SignContainer>
            <Container>
                <SignForm>
                {/* <Label>First Name:</Label> */}
                  <Input type="text" placeholder="First Name" value={input.firstName} onChange={(event)=>setInput(prev=>({...prev, firstName: event.target.value}))}/>
                  <Para>{error.firstError}</Para>

               
                {/* <Label>Last Name:</Label> */}
                <Input type="text" placeholder="Last Name" value={input.lastName} onChange={(event)=>setInput(prev=>({...prev, lastName:event.target.value}))}/>
                <Para>{error.lastError}</Para>

                
                {/* <Label>UserName:</Label> */}
                <Input type="text" placeholder="UserName" value={input.userName} onChange={(event)=>setInput(prev=>({...prev, userName:event.target.value}))}/>
                <Para>{error.userError}</Para>

                
                {/* <Label>Email Address:</Label> */}
                <Input type="email address" placeholder="Email Address" value={input.emailAddress} onChange={(e)=>setEmail(e.target.value)}/>
                <Para>{error.emailError}</Para>
                
                {/* <Label>Nationality:</Label> */}
                <Input type="text" placeholder="Nationality" value={input.nationality} onChange={(event)=>setInput(prev=>({...prev, nationality:event.target.value}))}/>
                <Para>{error.nationalityError}</Para>
                
                {/* <Label>Password:</Label> */}
                <Input type="text" placeholder="Password" value={input.password} onChange={(e)=>setPassword(e.target.value)}/>
                <Para>{error.passwordError}</Para>
                
                {/* <Label>Confirm Password:</Label> */}
                <Input type="text" placeholder="Confirm Password" value={input.confirmPassword} onChange={(event)=>setInput(prev=>({...prev,confirmPassword:event.target.value}))}/>
                <Para>{error.confirmError}</Para>
                <Button onClick={handleSignup}>Signup</Button>

                <Para style={{color:"#759F82"}}>Already Registered?</Para>
                <Para ><Link to="/Login">Login </Link></Para>
                </SignForm>
            </Container>

        </SignContainer>
        </>
    )
}

export default Signup