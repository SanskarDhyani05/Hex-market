import styled from "styled-components";
import { screenSizes } from "../../shared/styles/theme";

interface InputProps {
  width: string;
  margin: string;
}


export const Container =styled.div `
 background:white;
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 20px 30px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 50px 100px;
    grid-template-columns: 7fr 5fr;
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
  width:100%;
  padding: 0 20px;
  margin: ${(props) => props.margin};
  @media (min-width: ${screenSizes.mediaS}px) {
    width: ${(props) => props.width};
  }
`;
export const StakeWrap =styled.div `
`
export const Heading = styled.h2`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height:20px;
  color: #222222;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 22px;
    line-height: 30px;
  }
`;
export const Sub = styled.p`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 19px;
  color: #222222;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 14px;
  }
`;
export const Text = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  color: rgba(124, 124, 124, 1);
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 12px;
  }
`;
export const MaxText = styled.p`
  position: absolute;
  font-family: Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #7b5cd3;
  right:10px;
  bottom:5px;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaS}px) {
    right: 240px;
  }
`;
export const InfoWrap = styled.div`
  background: #f5f5f9;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 12px;
  padding:20px;
`;
export const SubHeading =styled(Heading)`
font-size:15px;
`;
export const Para = styled.p`
  font-family: Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-top:-10px;
  color: #7c7c7c;
`;
export const Footer = styled.div`
  padding: 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 0 20px;
    padding-bottom: 100px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 0 100px;
    padding-bottom: 100px;
  }
`;
export const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align:left;
  padding: 10px 0;
  border-bottom: 1px solid #dddddd;
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    text-align: center;
  }
`;
export const Amount = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 500;
  font-size:10px;
  line-height: 19px;
  color: #222222;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 14px;
  }
`;
export const ButtonWrap =styled.div `
 display:flex;
 flex-direction:column;
 @media(min-width:${screenSizes.mediaS}px){
   flex-direction:row;
 }
`;
export const Unstake = styled.button`
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  color: #222222;
  text-align: center;
  padding: 12px 12px;
  height: 41px;
  border-radius: 5px;

  cursor: pointer;
  :hover {
    background: #dddddd;
  }
  width: 100%;
  margin: 10px 0;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 95px;
    margin:0 10px;
  }
`;