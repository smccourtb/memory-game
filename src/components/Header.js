import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";
import { Container, Img, MenuButton } from "../styles/Header.js";

const Header = ({ setShowMenu }) => {
  return (
    <Container>
      <Img src={Logo} />
      <MenuButton onClick={() => setShowMenu(true)}>Menu</MenuButton>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  setShowMenu: PropTypes.func,
};
