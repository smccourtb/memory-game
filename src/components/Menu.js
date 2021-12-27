import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 327px;
  height: 224px;
  position: absolute;
  top: 222px;
  left: 24px;
  background-color: white;
  padding: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const Buttons = styled.button`
  width: 279px;
  height: 48px;
  background-color: #dfe7ec;
  color: #304859;
  font-family: Atkinson Hyperlegible, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  border-radius: 24px;
  border: none;
  outline: none;
  h
`;
const Menu = ({ setSetup, setShowMenu, restartGame }) => {
  return (
    <Container>
      <Buttons
        onClick={() => {
          restartGame();
          setShowMenu(false);
        }}
      >
        Restart
      </Buttons>
      <Buttons
        onClick={() => {
          setSetup(true);
          setShowMenu(false);
        }}
      >
        New Game
      </Buttons>
      <Buttons onClick={() => setShowMenu(false)}>Resume Game</Buttons>
    </Container>
  );
};

export default Menu;

Menu.propTypes = {
  restartGame: PropTypes.func,
  setSetup: PropTypes.func,
  setShowMenu: PropTypes.func,
};
