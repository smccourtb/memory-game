import React from "react";
import Logo from "../assets/logo.svg";
import styled from "styled-components";
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

const Setup = ({ setSettings }) => {
  return (
    <Container>
      <Img />
      <Menu>
        <h3>Select Theme</h3>
        <div>
          <button>Numbers</button>
          <button>Icons</button>
        </div>
        <h3>Number of Players</h3>
        <div>
          <button
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 1,
              }));
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 2,
              }));
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 3,
              }));
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                playerCount: 4,
              }));
            }}
          >
            4
          </button>
        </div>
        <h3>Grid Size</h3>
        <div>
          <button
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                boardSize: 16,
              }));
            }}
          >
            4x4
          </button>
          <button
            onClick={() => {
              setSettings((prevSettings) => ({
                ...prevSettings,
                boardSize: 36,
              }));
            }}
          >
            6x6
          </button>
        </div>
        <button>Start Game</button>
      </Menu>
    </Container>
  );
};

export default Setup;

Setup.propTypes = {
  setSettings: PropTypes.func,
};
