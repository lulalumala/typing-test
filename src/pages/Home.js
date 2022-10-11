import Nav from "../components/Nav"
import styled from "styled-components"

const HomeContainer = styled.div`
`

const Home = () => {

    return (
        <HomeContainer>
            <Nav/>
            <Container>
                <Input></Input>
                <Input></Input>
            </Container>

        </HomeContainer>
    )
}
export default Home