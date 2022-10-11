
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavContainer = styled.div`
padding:1.5em 0;
background:#EDE4E0;
`
const P = styled.p`font-size: 1.5rem;`
const Div = styled.div`display: flex;
gap: 1em;`
const Container = styled.div`
display: flex;
justify-content: space-between;
margin:0 auto;
width:80%;`

const Nav = () => {
    return (
        <NavContainer>
            <Container>
            <Div>
                <P><Link to="/">TYPING TEST</Link></P>
            </Div>
            <Div>
                <P><Link to="/typing">Typing</Link></P>
                <P><Link to="/result">Result</Link></P>
                <P><Link to="/login">Login</Link></P>
                </Div>
                </Container>
        </NavContainer>
    )
}
export default Nav