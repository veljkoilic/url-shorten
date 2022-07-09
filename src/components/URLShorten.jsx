import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { PillButton } from "./PillButton";
import { Url } from "./Url";

export const URLShorten = () => {
  const API = "https://api.shrtco.de/v2/shorten?url=";
  const [url, setUrl] = useState("");
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const [error, setError] = useState("");
  const shortenURL = async () => {
    fetch(API + url)
      .then((data) => data.json())
      .then((res) => {
        try {
          console.log(res);
          if (res.ok) {
            setShortenedURLs((prev) => {
              return [...prev, res.result];
            });
          } else {
            switch (res.error_code) {
              case 1:
                setError("You need to put in a URL");
                break;
              case 2:
                setError("Enter a valid URL");
                break;
              case 3:
                setError("Rate limit reached. Wait a second and try again");
                break;
              case 4:
                setError("IP-Address has been blocked because of violating our terms of service");
                break;
              case 5:
                setError("shrtcode code (slug) is already taken/in use");
                break;
              case 6:
                setError("Unknown error");
                break;
              case 7:
                setError("No code specified");
                break;
              case 8:
                setError("Invalid code submitted");
                break;
              case 9:
                setError("Missing required parameters");
                break;
              case 10:
                setError("Trying to shorten a disallowed Link.");
                break;
              default:
                setError("Something went wrong.");
                break;
            }
          }
        } catch (error) {
          console.log(error);
        }
      });
  };
  return (
    <>
      <Container>
        <Input>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <Error>{error}</Error>
        </Input>
        <Button
          onClick={() => {
            shortenURL();
          }}
        >
          Shorten It!
        </Button>
      </Container>
      {shortenedURLs.map((url) => (
        <Url key={url} url={url} />
      ))}
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
    padding: "35px",
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
    &.error {
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
    marginTop: "15px",
  })}
`;
