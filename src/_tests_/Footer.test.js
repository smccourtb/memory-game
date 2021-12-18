import Footer from "../components/Footer";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

describe("renders <Footer />", () => {
  it("Time container succesfully rendered", () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole("time-container"));
  });
  it("Time is shown correctly", () => {
    render(<Footer />);
    expect(screen.getByText(/time/i)).toHaveTextContent("Time");
  });

  it("Moves container succesfully rendered", () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole("moves-container"));
  });

  it("Moves label is correct", () => {
    render(<Footer />);
    expect(screen.getByText(/moves/i)).toHaveTextContent("Moves");
  });
});
