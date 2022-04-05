import styled from "styled-components";
import { screenSizes } from "../styles/theme";

export const Buy = styled.p`
  font-size: 15px;
  color: #5e72e4;
  display: none;
  font-family: Bold;
  :hover {
    color: rgba(50, 68, 171, 1);
  }
`;
export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  /* box shadow */
  box-shadow: 0px 4px 9px 1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding:10px;
  :hover {
    border: 1px solid #5e72e4;
    cursor: pointer;
    ${Buy} {
      display: block;
      margin: 0;
    }
  }
  @media(min-width:${screenSizes.mediaS}px){
    padding:20px;
  }
`;
export const Image =styled.img `
 width:100%;
`;
export const TokenImg =styled.img `
 margin:-25px 5px 0 5px;
`;
export const Heading = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #7c7c7c;
`;
export const Sub = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #222222;
  margin-top:-5px;
`;
export const FlexDiv =styled.div `
 display:flex;
 align-items:center;
 justify-content:center;
`;
export const ColumnFlex=styled.div `
 display:flex;
 flex-direction:column;
 align-items:end ;
 justify-content:end;
 margin-top:-10px;
`;