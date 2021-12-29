import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";
import { Container, Img, MenuButton } from "../styles/header-styles.js";
import MediaQuery from "react-responsive";

const Header = ({ setShowMenu }) => {
  return (
    <Container>
      <Img src={Logo} />
      <MediaQuery query="(max-width: 768px)">
        <MenuButton onClick={() => setShowMenu(true)}>Menu</MenuButton>
      </MediaQuery>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  setShowMenu: PropTypes.func,
};
