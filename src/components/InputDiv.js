import styled from "styled-components"
import { useState, useRef, useEffect } from "react"
import Timer from "./Timer"

const Div = styled.div`

`

const TextDiv = styled.div`
height: 10vh;
outline: none;
border: 1px solid black;
position: relative;
`
const TimerDiv = styled.div`
position: absolute;
right: 0;
top: 0;
font-size: 1.5rem;
width: fit-content;
border: 1px solid black;
`

const InputDiv = ({states, startTimer, timeSelected, setShow, show, setStates, setStartTimer, randomWord, text}) => {
    useEffect(() => {
        textDivRef.current.focus()
    }, []);

    const textDivRef = useRef("")

    const onChangeFunction = (e) => {
        const inputValue = e.target.innerText
        if (inputValue.length === randomWord.length) {
            setStates(prev => ({ ...prev, typedWords: [...prev.typedWords, inputValue] }))
            setStates(prev => ({ ...prev, originalText: [...prev.originalText, text.join(" ")] }))
            textDivRef.current.innerText = ""

        }

        let correct = []
        let incorrect = []

        // check errors and correct elements
        for (let char of inputValue) {

            const indexOfChar = randomWord.indexOf(char)
            randomWord.charAt(indexOfChar) === char ? correct.push("correct") : incorrect.push("incorrect")
            console.log(inputValue.length)
            console.log(text)
        }
        setStartTimer(true)
        console.log(correct)
        console.log(incorrect)
     
    }


    return (
        <Div>
            <TextDiv contentEditable onInput={(e) => onChangeFunction(e)} ref={textDivRef} defaultValue={textDivRef.current.value} >
            </TextDiv>
            <TimerDiv>
                            <Timer timeSelected={timeSelected} show={show} setShow={setShow} startTimer={startTimer} setStartTimer={setStartTimer}  />
                        </TimerDiv>
        </Div>
    )
}
export default InputDiv