import React from "react";
import styled from "styled-components";
import { tablet } from "../responsive";
import { PillButton } from "./PillButton";

export const Url = () => {
  return (
    <Container>
      <FullUrl>https://www.google.com</FullUrl>
      <LinkAndCopy>
        <ShortUrl>https://www.google.com</ShortUrl>
        <Copy>Copy</Copy>
      </LinkAndCopy>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  box-sizing: border-box;
  /* padding: 15px 30px 10px 30px; */
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  ${tablet({
    width: "90%",
    flexDirection: "column",
  })}
`;

const LinkAndCopy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  ${tablet({
    flexDirection: "column",

  })}

`;
const FullUrl = styled.div`
${tablet({
    borderBottom:" 1px solid rgba(0,0,0,0.08)"
})}
padding: 15px 30px;
`;

const ShortUrl = styled.div`
  align-self: flex-start;
  color: var(--cyan);
  font-weight: bold;
  padding: 15px 30px;
`;

const Copy = styled(PillButton)`
  border-radius: 5px;
  margin-right: 30px;
  ${tablet({
    width: "90%",
    marginRight: 0,
    marginBottom: "15px"
  })}
`;
