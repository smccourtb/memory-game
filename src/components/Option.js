import { Container } from "../styles/Option";
import PropTypes from "prop-types";
import { useState } from "react";

const Option = ({ value }) => {
  const [chosen, setChosen] = useState(false);

  const optionChosen = () => {
    if (!chosen) {
      setChosen(true);
    }
  };

  return <Container onClick={optionChosen}>{value}</Container>;
};
Option.propTypes = {
  value: PropTypes.number,
  test: PropTypes.func,
};
export default Option;
