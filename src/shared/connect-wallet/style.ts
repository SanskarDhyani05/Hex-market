import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../styles/theme";

export const Content = styled.div``;
export const SemiHead = styled.p`
  font-size: 12px;
  line-height: 19px;
  font-family: Light;
  margin: 0;
  color: white;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
  }
`;
export const AddressInfoWrap = styled.div`
  display: flex;
  justify-content:flex-start;
  color: rgb(255, 158, 0);
  @media (min-width: ${screenSizes.mediaS}px) {
    // transform: translateX(-216px);
    justify-content: center;
  }
`;
export const ConnectButtonWrap = styled.div`
  height: 42px;
  border: none;
  box-sizing: border-box;
  color: rgb(255, 158, 0);
  background: #5e72e4;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 12px;
  font-size: 10px;
  font-family: PoppinsRegular;
  color: white;
  p {
    margin: 0;
    line-height: 19px;
  }
  :hover {
    background: rgba(50, 68, 171, 1);
  }
`;
export const BnbInfo = styled.div`
  background: transparent;
  font-size: 12px;
  line-height: 19px;
  font-family: PoppinsSemiBold;
  padding: 12px 50px 9px 25px;
  height: 23px;
  @media (max-width: 667px) {
    width: 101px;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 12px;
    padding: 12px 50px 9px 15px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
    padding: 12px 50px 9px 25px;
  }
`;

export const AddressInfo = styled.div`
  display:flex;
  font-size: 12px;
  line-height: 19px;
  font-family: PoppinsSemiBold;
  padding: 12px 25px 7px 25px;
  height: 25px;
  margin-left: -40px;
  width: 120px;
  // text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 12px;
    padding: 12px 10px 7px 10px;
    width: 120px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
    padding: 12px 25px 7px 25px;
    width: 120px;
  }
`;

export const OptionArea = styled.div`
  border-radius: 0px;
  margin-bottom: 25px;
`;

export const WalletOption = styled.div`
  background: ${colors.base};
  border-radius: 0px;
  background: white;
  border: 1px solid #dddddd;
  margin-bottom: 15px;
  z-index: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: start;
  padding: 16px;
  &:hover {
    background: #e5e5e5;
  }
  &:active {
    transform: translate(1px, -1px);
  }

  p {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    font-family: PoppinsSemiBold;
    color: black;
    margin-top: 15px;
  }
`;

export const WalletDetails = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  p {
    font-size: 16px;
    line-height: 23px;
    font-family: PoppinsMedium;
    color: #000000;
    margin-top: 15px;
    text-align: center;
    word-break: break-all;
  }
`;

export const LinksFlex = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 60px 0;
  a {
    color: #fbec5b;
    text-decoration: none;
    font-size: 12px;
    line-height: 19px;
    font-family: Light;
    letter-spacing: 0.3px;
    cursor: pointer;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 16px;
    }
  }
  img {
    height: 20px;
    margin-left: 5px;
    display: inline-block;
    margin-top: -3px;
    cursor: pointer;
    @media (min-width: ${screenSizes.mediaM}px) {
      height: 24px;
    }
  }
  p {
    color: ${colors.white};
    font-size: 12px;
    font-family: Light;
    margin: 0;
  }
`;
const breatheAnimation = keyframes`
 0% {  transform: translateY(0px);}
 25% {  transform: translateY(15px);}
 50% {  transform: translateY(10px);}
 75% { transform: translateY(5px); }
 100% { transform: translateY(0px); }

 `;
export const StatusImage = styled.img`
  animation: ${breatheAnimation} 1.5s linear infinite;
`;
export const StatusContent = styled.div`
  text-align: center;
  a {
    font-family: Light;
    font-size: 16px;
    line-height: 19px;
    color: #fbec5b;
    margin-right: 5px;
    margin-top: 4px;
  }
  p {
    font-family: SemiBold;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    color: ${colors.white};
  }
  h2 {
    font-family: Medium;
    font-size: 16px;
    line-height: 19px;
    margin: 10px 0;
    color: ${colors.white};
  }

  h3 {
    font-family: Light;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    color: ${colors.white};
    font-weight: 300;
  }
`;

export const LinkFlex = styled.div`
  display: flex;

  img {
    margin-top: -4px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const FrameImg = styled.img`
  cursor: pointer;
  margin:5px 20px;
`;