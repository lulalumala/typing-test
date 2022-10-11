import styled from "styled-components"
import Nav from "../components/Nav"

const ResultContainer = styled.div`
margin: 2em 0;`
const ResultDiv = styled.div`display: flex;
gap: 5em;
justify-content: center;
`
const ResultTest = styled.p`font-size: 3rem;
`
const P = styled.p`font-size: 2rem;`
const Div = styled.div`box-shadow: 0 0 5px gray;
border-radius: 50%;
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`
const Button = styled.button`padding: 1em 2em;
border-radius: 5px;
cursor: pointer;
font-size: 1.5rem;
margin: 0 auto;`
const ButtonContainer = styled.div`display: flex;
margin: 1em 0;`
const Result = () => {

    return (<>
        <Nav />
        <ResultContainer>
            <ResultDiv>
                <Div>
                    <ResultTest>00</ResultTest>
                    <P>WPM</P>
                </Div>
                <Div>
                    <ResultTest>00</ResultTest>
                    <P>Accuracy</P></Div>
            </ResultDiv>
            <ButtonContainer>
                <Button>Retake Test</Button>
            </ButtonContainer>
        </ResultContainer>
    </>
    )
}
export default Result