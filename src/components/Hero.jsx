import React from "react";
import styled from "styled-components";
import { PillButton } from "./PillButton";
import { mobile, tablet, laptop } from "../responsive";
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
  padding-left: 10%;
  justify-content: flex-start;
  gap: 5%;
  background-color: #fff;
  padding-top: 185px;
  padding-bottom: 100px;
  ${laptop({
    paddingLeft: "0",
    flexDirection: "column-reverse",
    alignItems: "center",
  })}
  ${mobile({
    paddingTop: "115px",
  })}
`;
const Left = styled.div`
  flex: 7;
  ${laptop({
    flex: "1",
    width: "90%",
    marginTop: "40px",
    textAlign: "center",
  })}
  ${tablet({
    width: "95%",
  })}

  h1 {
    font-size: 100px;
    width: 100%;
    margin-bottom: 0;
    line-height: 120px;
    margin-top: 0;
    ${laptop({
      fontSize: "70px",
      lineHeight: "90px",
    })}
    ${mobile({
      fontSize: "40px",
      lineHeight: "45px",
    })}
  }
  p {
    width: 80%;
    font-size: 30px;
    color: var(--grayish-violet);
    margin: 0px 0 50px 0;
    padding: 0;
    ${laptop({
      fontSize: "25px",
      width: "100%",
    })}
    ${mobile({
      fontSize: "20px",
      width: "90%",
      paddingLeft: "5%",
      paddingRight: "5%",
      paddingTop: "20px",
      marginBottom: "20px",
    })}
  }
`;
const Button = styled(PillButton)`
  padding: 20px 50px;
  font-size: 30px;
  border-radius: 50px;
  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  flex: 6;
  display: flex;
  align-items: flex-start;
  margin-right: -10%;
  max-width: 100%;
  ${laptop({
    flex: "1",
  })}
`;
const Image = styled.img`
  width: 900px;
  padding-top: 0px;
  ${laptop({
    width: "800px",
  })}
  ${mobile({
    width: "500px",
  })}
`;
