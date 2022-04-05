import styled from "styled-components";
import { colors, screenSizes } from "../styles/theme";
import blue from "../../assets/icons/blue-circle.svg"

interface ModalBodyProps {
  show: boolean;
}

export const ModelHead = styled.div`
  color: #000000;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 800,ExtraBold;
    font-size: 16px;
    line-height: 25px;
    font-family:ExtraBold;
    margin-top: 20px;

    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 27px;
      line-height: 30px;
    }
  }
`;

export const ModalBody = styled.div<ModalBodyProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(186, 169, 255, 0.07);
  border: 1px solid rgba(186, 169, 255, 0.1);
  backdrop-filter: blur(15px);
`;

export const ModalContent = styled.div<any>`
  padding: 20px;
  border-radius: 0px !important;
  // background-color: #090D24;
  background: white;
  display: inline-block;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid rgba(186, 169, 255, 0.1);
  overflow: auto;
  // min-width: 280px;
  position: absolute;
  left: 50%;
  top:65%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  // overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 80%;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 600px;
    top: 50%;
  }
`;

export const ModalContainerHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`;
export const ModalContainerText = styled.p`
  font-size: 16px;
  margin: 0;
`;

// export const CloseButton = styled.div`
//   display: flex;
//   p {
//     font-family: Light;
//     font-weight: 300;
//     font-size: 14px;
//     color: ${colors.white};
//     margin: 0 10px;
//     @media (min-width: ${screenSizes.mediaM}px) {
//       font-size: 18px;
//     }
//   }

//   img {
//     height: 25px;
//     cursor: pointer;
//   }
// `;

export const CloseButton = styled.div``;
export const Close = styled.img`
  cursor: pointer;
  float:right;
  @media (min-width: ${screenSizes.mediaM}px) {
    cursor: pointer;
    margin-right: 0;
  }
`;
export const CardWrap =styled.div `
 display:flex;
 flex-direction:column;
 @media(min-width:${screenSizes.mediaS}px){
  flex-direction:row;
 }
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  margin:0 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    height: 75px;
    width: 75px;
    margin: 8px 20px;
  }
`;
export const TokenImg = styled.img`
  margin: -25px 5px 0 5px;
`;
export const Heading = styled.p`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #7c7c7c;
`;
export const Sub = styled.p`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #222222;
  margin-top: -5px;
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
`;
export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items:end;
  justify-content:end;
`;
export const MainBody= styled.div `
 margin:20px;
`;
export const InfoWrap = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  display:flex;
  align-items:center;
  padding:10px 0 ;
  margin:10px 0;
`;
export const NumberDiv = styled.div`
  background: url(${blue});
  background-size: cover;
  background-position: center;
  height:40px;
  width:66px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
export const Number = styled.p`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  /* Main Color */
  color: #5e72e4;
`;
export const InfoHeading = styled.h1`
  font-family:Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #222222;
`;
export const InfoSub = styled.p`
  font-family: Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #7c7c7c;
  margin-top:-5px;
`;