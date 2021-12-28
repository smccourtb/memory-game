import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Setup from "./components/Setup";
import "./styles/index";
import { GlobalStyle } from "./styles";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${({ setup }) => setup && `#152938`};
`;

const Root = () => {
  const [setup, setSetup] = useState(true);
  const [settings, setSettings] = useState({
    icon: "numbers",
    playerCount: 1,
    boardSize: 16,
  });

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
        <App settings={settings} setSetup={setSetup} />
      )}
    </Container>
  );
};

export default Root;

ReactDOM.render(<Root />, document.querySelector("#root"));
