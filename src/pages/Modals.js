import { useState } from "react"
import styled from "styled-components"
import ClearIcon from '@mui/icons-material/Clear';

 const Button=styled.button`
 padding:1em 2em;
 border:none;
 border-radius:5px;
 background:#759F82;
color:white;
`
const Div=styled.div`
width: 200px;
height: 200px;
background:yellow;
`
const First=styled.div``
const Cleared=styled.div``

const Modals=()=>{
    const[show, setShow]=useState(false)

    const showModal=(event)=>{
    setShow({show:true})
    }
    return(
        <>

        {
            show &&//short circuit
        <Div style={{width:"200px", height:"200px", background:"#759F82", borderRadius:"50%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
             <p>This is the Modal</p>
            <Cleared onClick={()=>setShow(false)}>Retake Test</Cleared> 
        </Div>
          
        

        }
        <Button onClick={(event)=>{showModal()}}>Show Modal
        <ClearIcon/>

        </Button>
        
        </>
    )
} 
export default Modals