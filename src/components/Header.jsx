import React from 'react'
import styled from 'styled-components'
import { PillButton } from './PillButton';

export const Header = () => {
  return (
    <Container>
        <Left>
            <Logo>Shortly</Logo>
            <Menu>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </Menu>
        </Left>
        <Right>
            <Login>Login</Login>
            <SignUp>Sign Up</SignUp>
        </Right>
    </Container>
  )
}

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 10%;
 background-color: #fff;
`;
const Left = styled.div`
display: flex;
align-items: center;
`;
const Logo = styled.h1`
font-size: 30px;
margin-right: 20px;
cursor: pointer;
transition:0.1s;
&:hover{
    margin-left: -14px;
    transition:0.1s;
    letter-spacing: 2px;
}
`;
const Menu = styled.ul`
display: flex;
gap: 30px;
list-style-type: none;
li{
color: var(--grayish-violet);
font-weight: 700;
font-size: 16px;
&:hover{
    cursor: pointer;
    color: #000;
}
}
`;
const Right = styled.div`
button{
    margin-left: 20px;
}
`;
const Button = styled.button`
cursor: pointer;
padding: 10px 20px;
border-radius: 20px;
border: none;
font-weight: 700;
`;

const Login = styled(Button)`
color: var(--grayish-violet);
background-color: #fff;
&:hover{
    background-color: lightgray;
}
`;
const SignUp = styled(PillButton)``;