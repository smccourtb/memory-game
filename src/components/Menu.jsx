import PropTypes from "prop-types";
import { Container, Buttons } from "../styles/menu-styles";

const Menu = ({ setSetup, setShowMenu, setReset }) => {
  return (
    <Container>
      <Buttons
        onClick={() => {
          setReset(true);
          setShowMenu(false);
        }}
      >
        Restart
      </Buttons>
      <Buttons
        onClick={() => {
          setShowMenu(false);
          setSetup(true);
          setReset(true);
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
  setReset: PropTypes.func,
  setSetup: PropTypes.func,
  setShowMenu: PropTypes.func,
};
