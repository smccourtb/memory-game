import PropTypes from "prop-types";
import {
  Container,
  Img,
  Menu,
  Labels,
  ButtonContainer,
  OptionButtons,
  StartGame,
  OptionContainer,
} from "../styles/setup-styles";

const Setup = ({ setSettings, setShowSetup, settings, setReset }) => {
  return (
    <Container>
      <Img />
      <Menu>
        <OptionContainer>
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
        </OptionContainer>
        <OptionContainer>
          {" "}
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
        </OptionContainer>
        <OptionContainer>
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
        </OptionContainer>
        <StartGame
          onClick={() => {
            setShowSetup(false);
            setReset(true);
          }}
        >
          Start Game
        </StartGame>
      </Menu>
    </Container>
  );
};

export default Setup;

Setup.propTypes = {
  setSettings: PropTypes.func,
  setShowSetup: PropTypes.func,
  settings: PropTypes.object,
  setReset: PropTypes.func,
};
