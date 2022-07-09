import styled from "styled-components"
import { PillButton } from "./PillButton";

export const BoostLinks = () => {
  return (
    <Container>
        <h2>Boost your links today</h2>
        <Button>Get Started</Button>
    </Container>
  )
}


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
background-color: var(--dark-violet);
background-image: url('./images/bg-boost-desktop.svg');
background-size: cover;
background-repeat: no-repeat;
h2{
    color:#fff;
    font-size: 30px;
}

`;
const Button = styled(PillButton)``;