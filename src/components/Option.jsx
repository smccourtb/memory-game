import { Container, Value } from "../styles/option-styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookDead,
  faCubes,
  faDiceD20,
  faDiceD6,
  faDragon,
  faDungeon,
  faFire,
  faFlask,
  faGem,
  faGhost,
  faHatWizard,
  faQuidditch,
  faRing,
  faRocket,
  faScroll,
  faSkull,
  faSkullCrossbones,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  0: faGhost,
  1: faGem,
  2: faFlask,
  3: faCubes,
  4: faSun,
  5: faSkullCrossbones,
  6: faScroll,
  7: faRing,
  8: faHatWizard,
  9: faFire,
  10: faDungeon,
  11: faDragon,
  12: faDiceD6,
  13: faDiceD20,
  14: faBookDead,
  15: faQuidditch,
  16: faSkull,
  17: faRocket,
};
const Option = ({
  index,
  value,
  setPicked,
  picked,
  matches,
  settings,
  reset,
}) => {
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

  useEffect(() => {
    if (reset) {
      setChosen(false);
    }
  }, [reset]);

  return (
    <Container
      onClick={optionChosen}
      chosen={chosen}
      matches={matches.includes(index)}
    >
      {settings.icon === "icons" ? (
        <Value smallText={settings.playerCount > 1}>
          {(chosen || matches.includes(index)) && (
            <FontAwesomeIcon icon={icons[value]} />
          )}
        </Value>
      ) : (
        <Value smallText={settings.playerCount > 1}>
          {(chosen || matches.includes(index)) && value}
        </Value>
      )}
    </Container>
  );
};

Option.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
  setPicked: PropTypes.func,
  picked: PropTypes.array,
  matches: PropTypes.array,
  settings: PropTypes.object,
  reset: PropTypes.bool,
};

export default Option;
