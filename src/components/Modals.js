import { useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import ClearIcon from '@mui/icons-material/Clear';


const ModalContainer=styled.div`
`
const Container = styled.div`
margin:0 auto;
width:80%;
background:#EDE4E0;
border-radius:5px;
box-shadow:0 0 5px #EDE4E0;`

const TestResult = styled.div`
width:50vw;
height: 60vh;
padding: 1em;
border-radius: 10px;`

background:#759F82;
position:absolute;
top:50%;
 left:50%;
  transform:translate(-50%,-50%);`
  
const ModalShape = styled.div`
display:flex;
gap:4em;

`
const Para=styled.p`
color:white;`
const Paragraph=styled.p`
text-align:center;`

const ParaValue = styled.p``

const ParaSign = styled.div`
padding-top:5.5em;`

const ShapeOne = styled.div`
border-radius:50%;
width:200px;
height:200px;
border-radius:50%;
background:#5B6366;
border:none
display:flex;
justify-content:center;
// align-items:center;
// flex-direction:column;`

const TestButton = styled.button`
padding:1.5em 5em;
border:none;
background:#15C39A;
border-radius:20px;`
const Button = styled.button`
 padding:1em 2em;
 border:none;
 border-radius:5px;
 background:#759F82;
color:white;
`

const Cleared = styled.div``



const Modals = () => {
    const [show, setShow] = useState(false)

    const showModal = (event) => {
        setShow({ show: true })
    }
    return (
        <>


        {
            show &&//short circuit
        <ModalContainer>
            <Container>
                <TestResult>
                <Cleared onClick={()=>setShow(false)}>Close
            <ClearIcon/>
            </Cleared>
             <TestButton><Link to="/"> Retake Test </Link></TestButton>
             <Paragraph>This is your Test Score</Paragraph>
             <ModalShape>
                <ShapeOne >
                <Para>WPM</Para>
                <ParaValue>00</ParaValue>
                <Para>Speed</Para>
                </ShapeOne>
                 <ParaSign>
                 <ClearIcon/>
                 </ParaSign>
                <ShapeOne>
                <Para>ACCURACY</Para>
                <ParaValue>00</ParaValue>
                <Para>Accuracy</Para>
                </ShapeOne>
                 <ParaSign>=</ParaSign> 
                <ShapeOne>
                <Para>WPM</Para>
                <ParaValue>00</ParaValue>
                <Para>Net Speed</Para>
                </ShapeOne>
                
             </ModalShape>

           
            </TestResult> 
            </Container>
            </ModalContainer>
          
        

        }
        <Button onClick={(event)=>{showModal()}}>Show Modal
       

        </Button>
        
        </>
    )
}
export default Modals