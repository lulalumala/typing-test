
import { useState } from "react"
import styled from "styled-components"
const Button=styled.button`
padding:1em 2em;
border:none;
border-radius:5px;
background:#759F82;
color:white;
`

const Modals=()=>{
    const[show, setShow]=useState(false)

    const showModal=(event)=>{
    setShow({show:true})
    }
    return(
        <>
        <h1>Hello World</h1>

        {
            show &&//short circuit
        <div style={{width:"300px", height:"300px", background:"red", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
            <p>This is the Modal</p>
            <Button onClick={()=>setShow(false)}>Close</Button> 
        </div>
        }
        <Button onClick={(event)=>{showModal()}}>Show Modal</Button>
        
        </>
    )
} 
export default Modals