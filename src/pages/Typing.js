import Nav from "../components/Nav"
import styled from "styled-components"
import { useRef, useState, useEffect } from "react"
import { setIndexConfiguration } from "firebase/firestore"


const TypingContainer = styled.div`
background:#759F82;
height:100vh;
`

const TextDiv = styled.div`
background: inherit;
border: 1px solid black;
width: 100%;
outline: none;
padding: .5em 0;
font-size: 2rem;
margin-top: 1em;
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


const Typing = () => {
    useEffect(() => {
        textDivRef.current.focus()
    }, [])
    
    const textDivRef = useRef("")
     
    const [states, setStates] = useState({
        startTime: 0,
        elapsedTime: "",
        textToBeTyped: "",
        typedWords: [],
        errors: [],
        correctWords: [],
        originalText: []
    })

    const [dataTyped, setDataTyped] = useState("")


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

    const onChangeFunction = (e) => {
        const inputValue = e.target.innerText
        if (inputValue.split(" ").length === text.length+1 ) {
            setStates(prev => ({ ...prev, typedWords: [...prev.typedWords, inputValue] }))
            setStates(prev => ({ ...prev, originalText: [...prev.originalText, text.join(" ")] }))
            textDivRef.current.innerText = ""
        }

        console.log(inputValue)
        console.log(e)
        console.log(textDivRef.current.innerText)
      

        // check errors and correct elements
        for (let char of inputValue) {
          
                const indexOfChar = inputValue.indexOf(char)
               randomWord.charAt(indexOfChar)==char?console.log("correct"):console.log("incorrect")
            if (randomWord.charAt(indexOfChar)==char) {
            inputValue.innerHTML=`<span style="color:red">${char} </span>`
        }  
        }
      }

    

    return (

        <>
            <Nav />

            <TypingContainer>
                <TypingArea>
                    <Div>{randomWord} </Div>
                    <TextDiv contentEditable onInput={(e) => onChangeFunction(e)} ref={textDivRef} defaultValue={textDivRef.current.value} ></TextDiv>

                </TypingArea>
            </TypingContainer>
        </>
    )
}
export default Typing