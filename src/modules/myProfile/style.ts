import styled from "styled-components";
import home from "../../assets/images/home-background.svg";
import { screenSizes } from "../../shared/styles/theme";

export const Container = styled.div`
  background: white;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${home});
  background-size: cover;
  background-position: center;
  height: 550px;
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const Heading = styled.h1`
  font-family: Bold;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 74px;
  color: #ffffff;
`;
export const SubHeading = styled.p`
  font-family: Regular;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: left;
  color: rgba(124, 124, 124, 1);
`;
export const Button = styled.button`
  background: #ffffff;
  border-radius: 4px;
  border: none;
  height: 42px;
  width: 150px;
  color: #5e72e4;
  margin: 20px 0;
  cursor: pointer;
  :hover {
    background: #5e72e4;
    color: white;
  }
`;
export const MainBody = styled.div`
padding:10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 50px 70px;
  }
`;
export const BodyHeading = styled.h3`
  font-family: Bold;
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
`;
export const FourColumnWrap =styled.div `
 margin-top:20px;
`;