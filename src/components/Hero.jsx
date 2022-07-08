import React from "react";
import styled from "styled-components";
import { PillButton } from "./PillButton";
export const Hero = () => {
  return (
    <Container>
      <Left>
        <h1>More than just shorter links</h1>
        <p>Build your brands recognition and get detailed insights on how your links are performing.</p>
        <Button>Get Started</Button>
      </Left>
      <Right>
        <Image src="./images/illustration-working.svg" />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: calc(100vh - 85px);
  padding-left: 10%;
  justify-content: flex-start;
  gap: 5%;
  background-color: #fff;
  padding-top: 100px;
`;
const Left = styled.div`
  flex: 7;
  h1 {
    font-size: 100px;
    width: 100%;
    margin-bottom: 0;
    line-height: 120px;
  }
  p {
    width: 80%;
    font-size: 30px;
    color: var(--grayish-violet);
    margin: 0px 0 50px 0;
    padding: 0;
  }
`;
const Button = styled(PillButton)`
  padding: 20px 50px;
  font-size: 30px;
  border-radius: 50px;
`;

const Right = styled.div`
  flex: 6;
  display: flex;
  align-items: flex-start;
  margin-right: -10%;
`;
const Image = styled.img`
  width: 900px;
  padding-top: 0px;
`;
