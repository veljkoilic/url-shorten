import React from "react";
import styled from "styled-components";
import { tablet } from "../responsive";
import { StatisticsCard } from "./StatisticsCard";

export const AdvancedStatistics = () => {
  const cards = [
    {
      id: 1,
      title: "Brand Recognition",
      icon: "./images/icon-brand-recognition.svg",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content. ",
    },
    {
      id: 2,
      title: "Detailed Records",
      icon: "./images/icon-detailed-records.svg",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      title: "Fully Customizable",
      icon: "./images/icon-fully-customizable.svg",
      text: "Improve brand awareness and content discoverabillity through customizable links, supercharging",
    },
  ];
  return (
    <Container>
      <Title>Advanced Statistics</Title>
      <Subtitle>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Subtitle>
      <CardContainer>
        {cards.map((card) => (
          <StatisticsCard key={card.id} card={card} />
        ))}
      </CardContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  margin: 100px auto 150px auto;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 40px;
`;
const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  width: 40%;
  margin: 0 auto;
  color: gray;
  margin-bottom: 150px;
  ${tablet({
    width: "80%"
  })}
`;
const CardContainer = styled.div`
display: flex;
gap: 50px;
justify-content: center;
${tablet({
    flexDirection: "column",
    alignItems: "center"
})}

`;