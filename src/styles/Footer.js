import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-top: 6.5em;
`;

export const DataContainer = styled.div`
  width: 151px;
  height: 100%;
  border-radius: 5px;
  background-color: #dfe7ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.p`
  font-family: Atkinson Hyperlegible;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #7191a5;
`;

export const Value = styled.p`
  font-family: Atkinson Hyperlegible;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #304859;
`;
