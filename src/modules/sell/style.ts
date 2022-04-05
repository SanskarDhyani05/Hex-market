import styled from "styled-components";
import { screenSizes } from "../../shared/styles/theme";

export const Container = styled.div`
  background: white;
  padding: 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding:0px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 50px;
  }
`;
export const BackDiv =styled.div `
 display:flex;
 cursor:pointer;
`;
export const BackImg =styled.img `
 margin: 0 10px;
`
export const BackText = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #5e72e4;
  :hover {
    color: rgba(50, 68, 171, 1);
  }
`;
export const MainBody = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction:column-reverse;
    padding:20px;
  }
  @media(min-width:${screenSizes.mediaM}px){
  flex-direction:column-reverse;
  }
  @media(min-width:${screenSizes.mediaXL}px){
    flex-direction:row;
  }

`;
export const Wrapper =styled.div `
`;
export const Heading = styled.h1`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #222222;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 35px;
    line-height: 48px;
  }
`;
export const PriceText = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #222222;
`;
export const AmountWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
  }
`;
export const EthDiv = styled.div`
  background: #f5f5f9;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  color: rgba(124, 124, 124, 1);
  margin-right: 20px;
  margin: 20px 0;
  width:100%;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin: 0;
    width: 150px;
  }
`;
export const EthImg=styled.img`
 margin:0 20px;
 `;
export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  color: #7c7c7c;
  padding: 0 20px;
   margin:0;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 300px;
    margin: 0 20px;
  }
`;
export const PriceWrap =styled.div `

`;
export const TotalText = styled.p`
  color: #7c7c7c;
  position:absolute;
  right:20px;
`;
export const FeeWrap = styled.div`
  border: 1px solid #dddddd;
  border-left: none;
  border-right: none;
  margin: 100px 0 30px 0;
  width:100%;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 500px;
  }
`;
export const Fee = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #222222;
`;
export const FlexDiv=styled.div `
display:flex;
justify-content:space-between;
`;
export const Service = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  color: #222222;
`;
export const ImageWrap = styled.div`
  height: auto;
  width: 100%;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 0;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 0;
  }
  @media(min-width:${screenSizes.mediaL}px){
    padding: 0;
  }
  @media(min-width:${screenSizes.mediaXL}px){
    padding:0 50px;
    width:fit-content;
  }
`;
export const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px 1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 10px;
  height: auto;
  :hover {
    cursor: pointer;
  }
}`;