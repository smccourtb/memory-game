import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";
import { Container, Img, MenuButton } from "../styles/Header.js";
import Menu from "./Menu";
import { useState } from "react";

const Header = ({ setSetup, restartGame }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container>
      {showMenu && (
        <Menu
          setSetup={setSetup}
          restartGame={restartGame}
          setShowMenu={setShowMenu}
        />
      )}
      <Img src={Logo} />
      <MenuButton onClick={() => setShowMenu(true)}>Menu</MenuButton>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  restartGame: PropTypes.func,
  setSetup: PropTypes.func,
};
