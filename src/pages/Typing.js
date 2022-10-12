import Nav from "../components/Nav"
import styled from "styled-components"
import { useState } from "react"

const TypingContainer = styled.div`
background:#759F82;
height:100vh;
`

const Textarea = styled.textarea`
background: inherit;
width: 100%;
outline: none;
padding: .5em 0;
font-size: 2rem;
margin-top: 1em;
`

const Div = styled.div`
font-size: 2rem;
`
const P = styled.p`font-size:2.5rem;`
const TypingArea = styled.div`
width: 80%;
margin: 0 auto;
// border: 1px solid black;
padding:1.5em;

`


const Typing = () => {

    const [states, setStates] = useState({
        startTime:0,
        elapsedTime: "",
        typedWords: [],
        errors: [],
        correctWords: [],
        originalText:[]
    })
    
    const [dataTyped, setDataTyped]=useState("")


    const words = [
        "Everybody lies. Cops lie. Lawyers lie. Witnesses lie. The victim lie. A trial is a contest of lies. And everybody on the courtroom knows this. The judge knows this. Even the jury knows this. They come into the buildings knowing they will be lied to. They take their seats in the box and agree to be lied to. The trick if you are sitting at the defense table is to be patient. To wait. Not for just any lie. But for the one you can grab on to and forge like hot iron into a sharpened blade. You then use that blade to rip the case open and spill its guts out on the floor. That’s my job, to forge the blade. To sharpen it. To use it without mercy or conscience. To be the truth in a place where everybody lies.",
        "The quick brown fox jumps over a lazy dog.He stores golden fish in aquariums.",
        "Tongue twister! Kantai can tie a tie, why can't I tie a tie like Kantai tie a tie?",
        "So social shosho saw a source show.does she sells sea shells at the sea shore ? She sells sea shells at the seashore.",
        "Learning never exhausts the mind.",
        "The only way to do great work is to love what you do."
    ]
    const randomWord=words[Math.floor(Math.random()*words.length)]
    const text = randomWord.split(" ")

    return (
        <>
            <Nav />

            <TypingContainer>
                <TypingArea>
                    <Div>{randomWord} </Div>
                    <Textarea onChange={(e) => {
                      
                        setDataTyped(e.target.value);

                        if (dataTyped.split(" ").length == text.length) {
                            setStates(prev=>({...prev, typedWords:[...prev.typedWords,dataTyped]}))
                        }

console.log(states.typedWords)
                        // let inputValue = e.target.value
                        // let inputArray=inputValue.split(" ")
                        // if (inputArray.length === text.length) {
                        //     setStates(prev=>({ ...prev, typedWords: [...prev.typedWords, inputValue] }))
                        //     inputValue=""   
                        //     // console.log(inputArray)   
                        // }
                        // console.log(states.typedWords)
                        // console.log(`input ${inputArray.length} and text ${text.length}`)
                        
                    }} ></Textarea>

                </TypingArea>
            </TypingContainer>
        </>
    )
}
export default Typing