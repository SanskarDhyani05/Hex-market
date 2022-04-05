import styled from "styled-components";
import { screenSizes } from "../../../../shared/styles/theme";
import regular from "../../assets/fonts/Alef/Alef-Regular.ttf";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  justify-content: space-between;
  z-index: 10000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  width: 100%;
  position: fixed;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const Logo = styled.img`
cursor:pointer;
height:40px;
width:150px;
margin:0 20px;
@media(min-width:${screenSizes.mediaS}px){
  height:auto;
  width:auto;
}
`;
export const NavContainer = styled.div`
  padding:10px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;
export const ButtonWrap = styled.div`
  display: none;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: flex;
    margin: 0 70px;
  }
`;
export const NavTab = styled.li`
  list-style: none;
  margin: 10px 30px;
  a {
    font-family: bold;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #222222;
    :hover {
      color: rgba(50, 68, 171, 1);
    }
  }
  cursor: pointer;
`;
export const MobileWrap = styled.div`
  border: 1px solid grey;
  padding:10px;
  border-radius:10px;
`;
export const MobileTab = styled.li`
  list-style: none;
  margin: 10px 0;
  width: auto;
  border-radius:6px;
  padding: 10px 20px;
  border: 1px solid #dddddd;
  a {
    font-family: bold;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #222222;
    :hover {
      color: rgba(50, 68, 171, 1);
    }
  }
  cursor: pointer;
`;
export const ToggleMenu = styled.img`
  height: 20px;
  width: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: none;
  }
`;
export const FrameImg =styled.img `
 cursor:pointer;
 margin:0 20px;
`;