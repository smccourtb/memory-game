import PropTypes from "prop-types";
import { Container, Buttons } from "../styles/menu-styles";

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
          setShowMenu(false);
          setSetup(true);
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
