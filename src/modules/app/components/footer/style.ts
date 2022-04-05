import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const FooterContainer = styled.div`
  background: white;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  border-top: 1px solid #dddddd;
   @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
    padding: 20px 50px;
  }
  p {
    font-family: Regular;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.white};
  }
  a {
    margin-right: 20px;
  }
  img {
    margin-top: 6px;
  }
`;
export const FooterWrap =styled.div `
 display:flex;
`;
export const FooterImg = styled.img`
  height: 22px;
  cursor: pointer;
  margin:0 10px;
  width:70px;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 120px;
    margin: 0 20px;
  }
`;
export const ArrowImg = styled.img`
 cursor:pointer;
 height:20px;
  @media (min-width: ${screenSizes.mediaS}px) {
   height:auto;
  }
`;