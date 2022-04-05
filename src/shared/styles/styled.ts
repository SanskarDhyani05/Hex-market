import styled from "styled-components";
import { colors, screenSizes } from "./theme";
import backgroundImage from "../../assets/image/background-desktop.svg";
import { Button } from "../components/button";

interface InputProps {
  width: string;
  margin: string;
}

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${screenSizes.mediaM}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FourColumns = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-gap:10px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap:10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap:25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Input = styled.input<InputProps>`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  width: 300px;
  height: 40px;
  color: #7c7c7c;
  width: ${(props) => props.width};
  padding: 0 20px;
  margin: ${(props) => props.margin};
`;
export const ModifiedButton = styled(Button)`
  width: 90%;
  color: black;
  font-family: Medium;
  margin: 0 0 0 5px;
  background: transparent;
  border: 1px solid rgba(186, 169, 255, 0.25);
  :hover {
    background: #e5e5e5;
  }
`;
