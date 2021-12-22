import { Container, Value } from "../styles/Option";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Option = ({ index, value, setPicked, picked, matches }) => {
  const [chosen, setChosen] = useState(false);

  const optionChosen = () => {
    if (!chosen) {
      setChosen(true);
      setPicked((prev) => [...prev, { value, index }]);
    }
  };

  useEffect(() => {
    console.log(picked.length);
    if (picked.length === 2) {
      setChosen(false);
    }
  }, [picked]);

  return (
    <Container
      onClick={optionChosen}
      chosen={chosen}
      matches={matches.includes(index)}
    >
      <Value>{(chosen || matches.includes(index)) && value}</Value>
    </Container>
  );
};

Option.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
  setPicked: PropTypes.func,
  picked: PropTypes.array,
  matches: PropTypes.array,
};

export default Option;
