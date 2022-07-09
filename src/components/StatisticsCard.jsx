import React from "react";
import styled, { css } from "styled-components";
import { tablet } from "../responsive";

export const StatisticsCard = (props) => {
  return (
    <Container style={{ marginTop: props.card.id * 30 + "px" }}>
      <Icon>
        <img src={props.card.icon} alt="" />
      </Icon>
      <Title>{props.card.title}</Title>
      <Text>{props.card.text}</Text>
    </Container>
  );
};
const Container = styled.div`
  width: 350px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 20px 0px 20px;
  position: relative;
  ${tablet({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  })}
  &::before {
    content: "";
    width: 50px;
    height: 8px;
    display: block;
    position: absolute;
    left: 10px;
    background-color: var(--cyan);
    top: 150px;
    left: -50px;
    ${tablet({
      width: "8px",
      height: "120px",
      top: "-120px",
      left: "192px",
    })}
  }
  &:first-of-type {
    &::before {
      width: 0;
      height: 0;
    }
  }
  &:last-of-type {
    &:before {
      top: 120px;
      ${tablet({
        top: "-140px",
      })}
    }
  }
`;
const Icon = styled.div`
  position: relative;
  top: -35px;
  left: 20px;
  ${tablet({
    left: 0,
  })}
  padding: 20px;
  width: 35px;
  height: 35px;
  background-color: var(--dark-violet);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const Title = styled.h4`
  font-size: 24px;
  position: relative;
  top: -35px;
`;
const Text = styled.p`
  position: relative;
  top: -35px;
  color: gray;
`;
