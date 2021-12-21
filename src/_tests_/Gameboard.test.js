import Gameboard from "../components/Gameboard";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

describe("renders <Gameboard />", () => {
  it("Gameboard succesfully rendered", () => {
    render(<Gameboard />);
  });
});
