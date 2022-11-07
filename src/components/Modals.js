import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"

const ModalContainer = styled.div`
background:red;
`
const Container = styled.div`
margin:0 auto;
width:80%;
border-radius:5px;
box-shadow:0 0 5px #EDE4E0;`

const TestResult = styled.div`
width:30vw;
height: fit-content;
padding: 1em;
border-radius: 10px;
background:white;
position:absolute;
top:50%;
 left:50%;
  transform:translate(-50%, -50%);
  box-shadow: 0 0 5px #759F82;`

const ModalShape = styled.div`
// display:flex;
// gap:4em;
`
const Para = styled.p`
color:black;
font-size: 1.5rem;
`

const Paragraph = styled.p`
text-align:center;
padding: .5em;
font-size: 2rem;
font-weight: bold;
`

const ParaValue = styled.p`
font-size:1.5rem;`

const ParaSign = styled.div`
padding-top:5.5em;`

const ShapeOne = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1em;
padding: .5em 0;
`

const TestButton = styled.button`
display: block;
margin: 0 auto;
margin-top: 1em;
padding:1.5em 5em;
border:none;
cursor: pointer;
background:#15C39A;
border-radius:20px;`

const Button = styled.button`
 padding:1em 2em;
 border:none;
 border-radius:5px;
color:black;
`

const Cleared = styled.div`
width: fit-content;
cursor: pointer;
box-shadow: 0 0 5px lightgrey;
padding: 1em 2em;
`

const ModalDiv = styled.div`
background:rgba(117, 159, 130);
height: 100vh;
`

const Modals = ({ setShow}) => {
    const navigate=useNavigate()

    // const [show, setShow] = useState(false)

    // const showModal = (event) => {
        //     setShow({ show: true })
        // }
        return (

            <ModalDiv>
                <ModalContainer>
                    <Container>
                        <TestResult>
                            <Cleared
                                onClick={() => {
                                    setShow(false)
                                navigate("/")
                                }}
                            >
                               <ParaValue >Close X</ParaValue> 
                            </Cleared>
                            <Paragraph>YOUR RESULTS</Paragraph>
                            <ModalShape>
                                <ShapeOne >
                                    <Para>SPEED:</Para>
                                    <ParaValue>00</ParaValue>
                                    <Para>WPM</Para>
                                </ShapeOne>
                                <ShapeOne>
                                    <Para>ACCURACY:</Para>
                                    <ParaValue>00</ParaValue>
                                    <Para>%</Para>
                                </ShapeOne>
                                <ShapeOne>
                                    <Para>NET SPEED:</Para>
                                    <ParaValue>00</ParaValue>
                                    <Para>WPM</Para>
                                </ShapeOne>

                            </ModalShape>
                            <TestButton><Link to="/"> Retake Test </Link></TestButton>


                        </TestResult>
                    </Container>


                </ModalContainer>
            </ModalDiv>
        )
    }
    export default Modals