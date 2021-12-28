import React from "react";
import Logo from "../assets/logo.svg";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Menu = styled.div`
  width: 327px;
  height: 386px;
  background-color: #fcfcfc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Img = styled.svg`
  background-color: white;
  mask: url(${Logo}) no-repeat center;
  height: 40px;
  width: 150px;
`;

const Labels = styled.h3`
  font-size: 15px;
  color: #7191a5;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 700;
  align-self: flex-start;
`;

const OptionButtons = styled.button`
  ${(props) =>
    props.selected
      ? css`
           {
            background-color: #304859;
          }
        `
      : css`
           {
            background-color: #bcced9;
          }
        `};
  height: 40px;
  width: 50%;
  padding: 5px;
  background-color: #bcced9;
  outline: none;
  border: none;
  border-radius: 24px;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 16px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 24px;
  gap: 11px;
`;

const NewGame = styled.button`
  color: white;
  width: 279px;
  height: 48px;
  background-color: #fda214;
  border: none;
  outline: none;
  border-radius: 26px;
  font-size: 18px;
  font-family: Atkinson Hyperlegible, sans-serif;
  font-weight: 700;
`;
const Setup = ({ setSettings, setSetup, settings }) => {
  return (
    <Container>
      <Img />
      <Menu>
        <Labels>Select Theme</Labels>
        <ButtonContainer>
          <OptionButtons
            selected={settings.icon === "numbers"}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                icon: "numbers",
              }));
            }}
          >
            Numbers
          </OptionButtons>
          <OptionButtons
            selected={settings.icon === "icons"}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                icon: "icons",
              }));
            }}
          >
            Icons
          </OptionButtons>
        </ButtonContainer>
        <Labels>Number of Players</Labels>
        <ButtonContainer>
          <OptionButtons
            selected={settings.playerCount === 1}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 1,
              }));
            }}
          >
            1
          </OptionButtons>
          <OptionButtons
            selected={settings.playerCount === 2}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 2,
              }));
            }}
          >
            2
          </OptionButtons>
          <OptionButtons
            selected={settings.playerCount === 3}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 3,
              }));
            }}
          >
            3
          </OptionButtons>
          <OptionButtons
            selected={settings.playerCount === 4}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 4,
              }));
            }}
          >
            4
          </OptionButtons>
        </ButtonContainer>
        <Labels>Grid Size</Labels>
        <ButtonContainer>
          <OptionButtons
            selected={settings.boardSize === 16}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                boardSize: 16,
              }));
            }}
          >
            4x4
          </OptionButtons>
          <OptionButtons
            selected={settings.boardSize === 36}
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                boardSize: 36,
              }));
            }}
          >
            6x6
          </OptionButtons>
        </ButtonContainer>
        <NewGame onClick={() => setSetup(false)}>Start Game</NewGame>
      </Menu>
    </Container>
  );
};

export default Setup;

Setup.propTypes = {
  setSettings: PropTypes.func,
  setSetup: PropTypes.func,
  settings: PropTypes.object,
};
