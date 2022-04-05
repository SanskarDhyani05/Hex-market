import styled from "styled-components";
import { screenSizes } from "../../shared/styles/theme";

export const Container = styled.div`
  background: white;
  padding: 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 20px 10px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 20px 10px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding: 50px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    padding: 50px;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns:repeat(1,1fr);
  margin: 30px 0;
  @media (min-width: ${screenSizes.mediaL}px) {
    grid-template-columns: 5fr 7fr;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: auto;
  }
`;
export const ImgWrap = styled.div`
  border: 1px solid #dddddd;
  padding: 10px;
  height: fit-content;
  border-radius: 12px;
  width: fit-content;
  margin:auto;
  @media(min-width:${screenSizes.mediaL}px){
    margin:0;
  }
`;
export const InfoWrap = styled.div`
  margin: 0 10px;
  @media(min-width: ${screenSizes.mediaS}px) {
  margin:0 10px;
  }
  @media(min-width:${screenSizes.mediaL}px){
   margin:0px;
  }
`;
export const Heading = styled.h2`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #7c7c7c;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 16px;
  }
`;
export const Sub = styled.div`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
  color: #222222;
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
export const OwnedText = styled.p`
  font-family: Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #7c7c7c;
`;
export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
  }
`;
export const AmountWrapper = styled.div`
  background: #f5f5f9;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 30px;
  width: 100%;
  height: 250px;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 100%;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin: 0;
    height: auto;
  }
`;
export const Wrap = styled.div`
  border-bottom: 1px solid #dddddd;
  text-align: center;
`;
export const Head = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #7c7c7c;
`;
export const Amount = styled.p`
  font-family: Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #222222;
  margin: 20px 0;
`;
export const ModifiedWrap = styled(Wrap)`
  margin-top: -15px;
`;
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f9;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 30px;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
  height: auto;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin: 0;
    height: 250px;
    flex-direction: row;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 0 20px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin: 0;
    height: auto;
  }
`;
export const CompletionDiv = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 13px solid #aebafd;
  box-sizing: border-box;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #7c7c7c;
`;
export const Completed = styled.h3`
  font-family: Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  margin: 0;
  color: #222222;
`;
export const TimeWrap = styled.div`
  padding: 10px;
`;
export const Date = styled(Amount)`
  font-size: 14px;
`;
export const Info = styled.p`
  font-size: 11px;
  margin-top: -20px;
  font-family: Medium;
  color: #7c7c7c;
`;
export const Div = styled.div``;
export const Token = styled.img`
  height: 30px;
  width: 22px;
  margin: 10px 5px;
`;
export const FlexDiv1 = styled(FlexDiv)`
  align-items: baseline;
  margin: -10px;
  display: flex;
  flex-direction: row;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
  }
  p {
    margin: 0 10px;
  }
`;
