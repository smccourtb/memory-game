import { Container, Value } from "../styles/Option";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Option = ({ index, value, setPicked, picked, matches }) => {
  const [chosen, setChosen] = useState(false);

  const optionChosen = () => {
    if (picked.length < 2 && !chosen) {
      setChosen(true);
      setPicked((prev) => [...prev, { value, index }]);
    }
  };

  useEffect(() => {
    if (picked.length === 2) {
      const timer = setTimeout(() => {
        setChosen(false);
      }, 500);
      return () => clearTimeout(timer);
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
