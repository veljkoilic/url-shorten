import React, {useState} from "react";
import styled from "styled-components";
import { PillButton } from "./PillButton";
import { mobile, tablet, laptop } from "../responsive";

export const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const toggleMenu = () => {
      setMenuIsOpen(!menuIsOpen)
    }
  return (
    <Container>
      <Left>
        <Logo>Shortly</Logo>
        <Hamburger onClick={toggleMenu}><img src={`./images/${menuIsOpen ? "close" : "menu"}-icon.png`} alt="" /></Hamburger>
      </Left>
{<Right className={menuIsOpen ? "menu-open": "menu-closed"}>
        <Menu>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </Menu>
        <div className="buttons">
          <Login>Login</Login>
          <SignUp>Sign Up</SignUp>
        </div>
      </Right>}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  background-color: #fff;
  z-index: 5;
  ${tablet({
    flexDirection: "column",
  })}
  
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  ${tablet({
    width: "100%",
    flex: "1",
    justifyContent: "space-between",
  })}
`;
const Logo = styled.h1`
  font-size: 30px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    margin-left: -14px;
    transition: 0.1s;
    letter-spacing: 2px;
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
  ${tablet({
    flexDirection: "column",
    margin: "0",
    gap: "10px",
    padding: 0,
    borderBottom: "0.5px solid rgba(214, 214, 214, 0.3)",
    width: "80%"

  })}
  li {
    color: var(--grayish-violet);
    font-weight: 700;
    font-size: 16px;
    ${tablet({
      textAlign: "center",
      color: "#fff",
      padding: "10px 20px",
    
    })}
    &:hover {
      cursor: pointer;
      color: #000;
      ${tablet({
        color: "lightgray"
      })}
    }
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  &.menu-open{
    display: flex;
  }
  &.menu-closed{
    display: flex;
    ${tablet({
        display: "none"
    })}
  }
  button {
    margin-left: 20px;
    ${tablet({
      fontSize: "16px",
      margin: "10px 0 0 0",

    })}
  }
  .buttons {
    ${tablet({
      display: "flex",
      flexDirection: "column",
      padding: 0,
    })}
  }
  ${tablet({
    flexDirection: "column",
    backgroundColor: "var(--dark-violet)",
    width: "100%",
    borderRadius: "20px",
    padding: "50px 0",

  })}
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
  background-color: transparent;
  ${tablet({
    color: "#fff",
  })}
  &:hover {
    background-color: lightgray;
  }
`;
const SignUp = styled(PillButton)`
${tablet({
    marginTop:"10px"
})}
`;
const Hamburger = styled.span`
  display: none;
  cursor: pointer;
  ${tablet({
    display: "block",
  })}
`;
