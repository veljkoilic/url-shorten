import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { PillButton } from "./PillButton";
import { Url } from "./Url";

export const URLShorten = () => {
  return (
    <>
    <Container>
      <Input>
        <input type="text" placeholder="Shorten a link here..." />
        <Error>Please add a link</Error>
      </Input>
      <Button>Shorten It!</Button>
    </Container>
    <Url/>
    <Url/>
    <Url/>

    </>
  );
};

const Container = styled.div`
  position: relative;
  top: -50px;
  width: 80%;
  padding: 0 10%;
  display: flex;
  align-items: flex-start;
  padding: 35px 35px 10px 35px;
  background-color: var(--dark-violet);
  background-image: url("./images/bg-shorten-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  border-radius: 10px;
  ${tablet({
    flexDirection: "column",
    padding:"35px"
  })}
  
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${tablet({
    width: "100%",
  })}
  input {
    padding: 15px 10px;
    border-radius: 5px;
    border: none;
    &.error{
        border: 2px solid var(--red);
    }
  }
`;
const Error = styled.span`
  color: var(--red);
  font-style: italic;
  font-size: 14px;
  margin-top: 5px;
  ${tablet({
    fontSize: "12px",
  })}
`;
const Button = styled(PillButton)`
  margin-left: 20px;
  border-radius: 5px;
  padding: 16px 30px;
  ${tablet({
    width: "100%",
    marginLeft: 0,
    marginTop: "15px"
  })}
`;
