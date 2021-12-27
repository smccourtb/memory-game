import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Setup from "./components/Setup";
import "./styles/index";
import { GlobalStyle } from "./styles";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 24px;
  ${(props) =>
    props["setup"] &&
    css`
      background-color: #152938;
    `}
`;
const Root = () => {
  const [setup, setSetup] = useState(true);
  const [settings, setSettings] = useState({
    icon: "numbers",
    playerCount: 1,
    boardSize: 16,
  });
  console.log(settings);

  return (
    <Container setup={setup}>
      <GlobalStyle />
      {setup ? (
        <Setup
          setSetup={setSetup}
          setSettings={setSettings}
          settings={settings}
        />
      ) : (
        <App settings={settings} />
      )}
    </Container>
  );
};

export default Root;

ReactDOM.render(<Root />, document.querySelector("#root"));
