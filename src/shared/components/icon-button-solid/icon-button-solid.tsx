import { css, ThemeProps } from "styled-components";
import { colors, ThemeStarter, screenSizes } from "../../styles/theme";
import styled from "styled-components";

export interface ButtonProps {
  margin?: string;
  icon?: string;
  priority?: string;
  theme: ThemeProps<ThemeStarter>;
  type?: string;
  background?: string;
  color: string;
}

export const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const buttonStyles = css`
  display: inline-block;
  margin: ${(props: ButtonProps) => props.margin};
  // background: ${(props: ButtonProps) => props.background};
  outline: 0;
  text-align: center;
  color: ${colors.neon};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  font-family:SemiBold;
  text-transform: uppercase;
  transition: all 0.1s;
  height: 44px;
  border: 1px solid rgba(186, 169, 255, 0.25);
  position: relative;
  padding: 0px 25px 0 45px;

  background:#121136;
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 14px;
  }

  &:disabled {
    cursor: initial;
    &:hover {
      // box-shadow: none;
    }
  }
  + a {
    margin-left: 10px;
    cursor: initial;
  }
 
  &:before {
    display: block;
    position: absolute;
    top: 12px;
    left: 20px;
    z-index: 1;
    content: url(${(props: ButtonProps) => props.icon});
  }
 
  &:hover {
    background: rgba(186, 169, 255, 0.1);
  }


  &:active {
   
  }
`;

export const IconButtonSolid = styled.button<any>`
  ${buttonStyles}
`;
