import { css, ThemeProps } from "styled-components";
import { colors, ThemeStarter, screenSizes } from "../../styles/theme";
import styled from "styled-components";

export interface ButtonProps {
  margin?: string;
  priority?: string;
  theme: ThemeProps<ThemeStarter>;
  type?: string;
  background?: string;
  color?: string;
  gradient?: string;
  width: string;
}

export const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const buttonStyles = css`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: ${(props: ButtonProps) => props.margin};
  // background: ${(props: ButtonProps) => props.background};
  // color: ${(props: ButtonProps) => props.color};

  background: rgba(94, 114, 228, 1);
  color: ${colors.white};
  outline: 0;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  font-family: Regular;
  transition: all 0.1s;
  padding: 12px 12px;
  height: 41px;
  letter-spacing: 0.1em;
  border: 1px solid #fff;
  border: none;
  width:100%;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    width: ${(props: ButtonProps) => props.width};
  }

  &:hover {
    background: rgba(50, 68, 171, 1);
  }

  &:active {
    // transform: translate(1px, -1px);
    // border: 1px solid #fff;
  }

  &:disabled {
    cursor: no-drop !important;
    background: #1d1b28;
    opacity: 0.5;
    color: white;
    height: 44px;
    &:hover {
      box-shadow: none;
    }
    &:after {
      content: "";
      border: none;
    }
  }

  + a {
    margin-left: 10px;
    cursor: initial;
  }
`;

export const Button = styled.button<any>`
  ${buttonStyles}
`;
