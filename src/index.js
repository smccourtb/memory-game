import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index";
import { GlobalStyle } from "./styles";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

export default Root;

ReactDOM.render(<Root />, document.querySelector("#root"));
