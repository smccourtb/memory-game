import { Container, Value } from "../styles/Option";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Option = ({ value, setPicked, picked }) => {
  const [chosen, setChosen] = useState(false);
  const [match, setMatch] = useState(false);

  const optionChosen = () => {
    if (!chosen) {
      setChosen(true);
      setPicked((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    console.log("PICKED: ", picked);
    if (picked.length === 2) {
      setChosen(false);
    }
  }, [picked]);
  return (
    <Container onClick={optionChosen} chosen={chosen}>
      <Value>{chosen && value}</Value>
    </Container>
  );
};

Option.propTypes = {
  value: PropTypes.number,
  setPicked: PropTypes.func,
  picked: PropTypes.array,
};

export default Option;
