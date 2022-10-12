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
        text:[]
        
})


    const words = [
        "The quick brown fox jumps over a lazy dog.He stores golden fish in aquariums.",
        "Tongue twister! Kantai can tie a tie, why can't I tie a tie like Kantai tie a tie?",
        "So social shosho saw a source show.does she sells sea shells at the sea shore ? She sells sea shells at the seashore.",
        "Learning never exhausts the mind.",
        "The only way to do great work is to love what you do."
    ]
    const randomWord=words[Math.floor(Math.random()*words.length)]
    const text = randomWord.split(" ")
    console.log(text)
    console.log(randomWord)

    return (
        <>
            <Nav />

            <TypingContainer>
                <TypingArea>
                    <Div>{randomWord} </Div>
                    <Textarea onChange={(e) => {
                        let inputValue = e.target.value
                        // setStates({...states, typedWords:inputValue})
                        let inputArray=inputValue.split(" ")
                        console.log(inputArray)
                        // console.log({typedWords)
                        
                    }} ></Textarea>

                </TypingArea>
            </TypingContainer>
        </>
    )
}
export default Typing