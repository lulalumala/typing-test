import Nav from "../components/Nav";
import styled from "styled-components";
import { useState } from "react";
import Modals from "../components/Modals";
import InputDiv from "../components/InputDiv";


const TypingContainer = styled.div`
background:#759F82;
height:100vh;
font-size:1.5rem;
padding: 1.4em;
`
const Div = styled.div`
font-size: 2rem;
`
// const P = styled.p`font-size:2.5rem;`
const TypingArea = styled.div`
width: 80%;
margin: 0 auto;
// border: 1px solid black;
padding:1.5em;
`
const ContentDiv = styled.div`
position: relative;
`
const TypingDiv = styled.div`
position: relative;
`

const ModalDiv = styled.div`
position: absolute;
top: 0;
left: 0;
z-index:10;
width: 100vw;
height: 100vh;
`

const Typing = ({ timeSelected, show, setShow, timeLeft, setTimeLeft, startTimer, setStartTimer }) => {
    const [states, setStates] = useState({
        startTime: 0,
        elapsedTime: "",
        timeChosen: "",
        textToBeTyped: "",
        typedWords: [],
        incorrectChars: [],
        correctChars: [],
        originalText: []
    })

    const words = [
        "Everybody lies. Cops lie. Lawyers lie. Witnesses lie. The victim lie. A trial is a contest of lies. And everybody on the courtroom knows this. The judge knows this. Even the jury knows this. They come into the buildings knowing they will be lied to. They take their seats in the box and agree to be lied to. The trick if you are sitting at the defense table is to be patient. To wait. Not for just any lie. But for the one you can grab on to and forge like hot iron into a sharpened blade. You then use that blade to rip the case open and spill its guts out on the floor. That’s my job, to forge the blade. To sharpen it. To use it without mercy or conscience. To be the truth in a place where everybody lies.",
        "The quick brown fox jumps over a lazy dog.",
        "He stores golden fish in aquariums.",
        "Kantai can tie a tie, why can't I tie a tie like Kantai tie a tie?",
        "She sells sea shells at the seashore.",
        "Learning never exhausts the mind.",
        "The only way to do great work is to love what you do."
    ]
    const randomWord = words[Math.floor(Math.random() * words.length)]
    const text = randomWord.split(" ")

    return (

        <TypingDiv>
            {show &&
                <ModalDiv >
                    <Modals setShow={setShow} />
                </ModalDiv>
            }
            <Nav />
            <TypingContainer>

                <TypingArea>
                    <Div>{randomWord} </Div>
                    <ContentDiv>
                        <InputDiv states={states} setStates={setStates} timeSelected={timeSelected} show={show} setShow={setShow} startTimer={startTimer} setStartTimer={setStartTimer} randomWord={randomWord} text={text} />
                    </ContentDiv>
          {console.log(text)}
                </TypingArea>
            </TypingContainer>
        </TypingDiv>
    )
}
export default Typing