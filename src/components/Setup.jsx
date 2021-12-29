import PropTypes from "prop-types";
import {
  Container,
  Img,
  Menu,
  Labels,
  ButtonContainer,
  OptionButtons,
  NewGame,
} from "../styles/setup-styles";

const Setup = ({ setSettings, setSetup, settings, setReset }) => {
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
        <NewGame
          onClick={() => {
            setSetup(false);
            setReset(true);
          }}
        >
          Start Game
        </NewGame>
      </Menu>
    </Container>
  );
};

export default Setup;

Setup.propTypes = {
  setSettings: PropTypes.func,
  setSetup: PropTypes.func,
  settings: PropTypes.object,
  setReset: PropTypes.func,
};
