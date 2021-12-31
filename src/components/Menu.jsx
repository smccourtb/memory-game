import PropTypes from "prop-types";
import { Container } from "../styles/menu-styles";
import { Restart, NewGame } from "../styles/gameover-styles";

const Menu = ({ setSetup, setShowMenu, setReset }) => {
  return (
    <Container>
      <Restart
        onClick={() => {
          setReset(true);
          setShowMenu(false);
        }}
      >
        Restart
      </Restart>
      <NewGame
        onClick={() => {
          setShowMenu(false);
          setSetup(true);
          setReset(true);
        }}
      >
        New Game
      </NewGame>
      <NewGame onClick={() => setShowMenu(false)}>Resume Game</NewGame>
    </Container>
  );
};

export default Menu;

Menu.propTypes = {
  setReset: PropTypes.func,
  setSetup: PropTypes.func,
  setShowMenu: PropTypes.func,
};
