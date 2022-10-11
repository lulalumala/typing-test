import Nav from "../components/Nav"
import styled from "styled-components"

const TypingContainer = styled.div`width: 80%;
margin: 0 auto;
// border: 1px solid black;
padding:1.5em;`
const Input = styled.input`width: 100%;
font-size: 3rem;
padding: .5em 0;
border: none;
outline: none;
border-bottom: 1px solid black;`
const Div = styled.div``
const P = styled.p`font-size:2.5rem;`

const Typing = () => {
    return (
        <>
            <Nav />
            <TypingContainer>
                <Div><P>The quick brown fox jumps over a lazy dog. He stores golden fish in aquariums
                </P>
                    <P>Tongue twister! Kantai can tie a tie, why can't I tie a tie like Kantai tie a tie? So social shosho saw a source show. does she sells sea shells at the sea shore? She sells sea shells at the seashore</P></Div>
                <Input type="text" />
                <Input type="text" />
                <Input type="text" />

            </TypingContainer>
        </>
    )
}
export default Typing