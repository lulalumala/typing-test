import Nav from "../components/Nav"
import styled from "styled-components"
import { useState } from "react"
import app, { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const NavContainer=styled.div`
`
const Container=styled.div`const auth = getAuth(app);
margin:0 auto;
width:50%;
padding:4em 0; 

`
const LoginForm=styled.div`
border:2px solid #EDE4E0;`
const Input=styled.input`
display:flex;
flex-direction:column;
justify-content:center;
outline:none;
border:none;
border-bottom:2px solid #759F82;
width:40vw;
padding:2em;
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
email:"",
password:""
})
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const [errors, setErrors]=useState({
    emailError:"",
    passwordError:""
})

const [success,setSuccess]=useState("")
const [color,setColor]=useState("")


const auth = getAuth(app);
const handleLogin=async()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth,message.email,message.password)

    signInWithEmailAndPassword(auth,email,password)

      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert("Successfully logged in")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });

try{ 

if(message.email===""){
    setErrors("Please write your email address")
}

if(message.password===""){
    setErrors("Please input your password")
}

else{
    await addDoc(collection(db, "typing-test"), message)
        setSuccess("Successfully logged in")
        setColor("#38E54D")

        setMessage({
            email:"",
            password:""
       })

    }
     

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
                    <Para>{success}</Para>
                   <LoginForm>
                    <Input type="text" placeholder="Email Address" onChange={(e)=>setMessage({email:e.target.value})}/>
                    <Para>{errors.emailError}</Para>

                    <Input type="text" placeholder="Password" onChange={(e)=>setMessage({password:e.target.value})}/>
                    <Para>{errors.passwordError}</Para>

                    <Button onClick={handleLogin}>Login</Button>
                    </LoginForm>
                </Container>
            </NavContainer>
        </>
    )
}
export default Login