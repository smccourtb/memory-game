import Logo from "../assets/logo.svg";
import { Container, Img, MenuButton } from "../styles/Header.js";

const Header = () => {
  return (
    <Container>
      <Img src={Logo} />
      <MenuButton>Menu</MenuButton>
    </Container>
  );
};

export default Header;
