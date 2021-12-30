import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ chosen }) => (chosen ? "#fda214" : "#304859")};
  background-color: ${({ matches }) => matches && "#bcced9"};
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ matches, chosen }) =>
      !(matches || chosen) && "#6395b8"};
  }
`;

export const Value = styled.div`
  color: white;
  font-size: ${({ smallText }) => (smallText ? "24px" : "40px")};
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: ${({ smallText }) => (smallText ? "44px" : "56px")};
  }
`;
