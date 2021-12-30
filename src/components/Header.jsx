import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";
import {
  Container,
  Img,
  MenuButton,
  MenuRestart,
  MenuNewGame,
  ButtonGroup,
} from "../styles/header-styles";
import MediaQuery from "react-responsive";

const Header = ({ setShowMenu, setReset, setShowSetup }) => {
  return (
    <Container>
      <Img src={Logo} />
      <MediaQuery query="(max-width: 767px)">
        <MenuButton onClick={() => setShowMenu(true)}>Menu</MenuButton>
      </MediaQuery>
      <MediaQuery query={"(min-width:768px)"}>
        <ButtonGroup>
          <MenuRestart
            onClick={() => {
              setReset(true);
            }}
          >
            Restart
          </MenuRestart>
          <MenuNewGame
            onClick={() => {
              setShowSetup(true);
              setReset(true);
            }}
          >
            New Game
          </MenuNewGame>
        </ButtonGroup>
      </MediaQuery>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  setShowMenu: PropTypes.func,
  setReset: PropTypes.func,
  setShowSetup: PropTypes.func,
};
