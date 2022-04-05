import { createGlobalStyle } from "styled-components";
// import { rgba } from 'polished'

// import url("https://p.typekit.net/p.css?s=1&k=mbf7fkk&ht=tk&f=39347.39348.39349&a=1312176&app=typekit&e=css");


import ManropeBold from "../../assets/fonts/manrope/fonts/ttf/Manrope-Bold.ttf"
import ManropeExtraBold from "../../assets/fonts/manrope/fonts/ttf/Manrope-ExtraBold.ttf";
import ManropeRegular from "../../assets/fonts/manrope/fonts/ttf/Manrope-Regular.ttf";
import ManropeSemiBold from "../../assets/fonts/manrope/fonts/ttf/Manrope-SemiBold.ttf";
import ManropeMedium from "../../assets/fonts/manrope/fonts/ttf/Manrope-Medium.ttf";
import ManropeLight from "../../assets/fonts/manrope/fonts/ttf/Manrope-Light.ttf";
import ManropeExtraLight from "../../assets/fonts/manrope/fonts/ttf/Manrope-ExtraLight.ttf";

export interface Colors {
  themeBackground: string;
  white: string;
  farmCardBackground: string;
  green: string;
  base: string;
  black: string;
  greenGradient: string;
  yellowGradient: string;
  yellow: string;
  whiteGradient: string;
  neon:string;
  buttonColor:string;
  
}


export const colors: Colors = {
  themeBackground: "#121119",
  white: "#ffffff",
  farmCardBackground: "#2E293F",
  neon:"#FF9700",
  green: "#01D14E",
  base: "#1F1D29",
  black: "#1D1A28",
  greenGradient: "#04A73F",
  yellow: "#FBEC5B",
  yellowGradient: "#EBDC47",
  whiteGradient: "#C4C4C4",
  buttonColor:"#00D7E7"
};

export interface ThemeStarter {
  [propName: string]: string | undefined;
  themeBackground: string;
  white: string;
  farmCardBackground: string;
  green: string;
  greenGradient: string;
  base: string;
  black: string;
  yellowGradient: string;
  yellow: string;
  whiteGradient: string;
  neon:string;
  buttonColor:string;

}

export const theme: ThemeStarter = {
  themeBackground: colors.themeBackground,
  white: colors.white,
  farmCardBackground: colors.farmCardBackground,
  green: colors.green,
  base: colors.base,
  black: colors.black,
  greenGradient: colors.greenGradient,
  yellowGradient: colors.yellowGradient,
  yellow: colors.yellow,
  whiteGradient: colors.whiteGradient,
  neon:colors.neon,
  buttonColor:colors.buttonColor
};

export interface ScreenSizes {
  mediaS: number;
  mediaM: number;
  mediaL: number;
  mediaXL: number;
  mediaXXL: number;
  mediaLX: number;
  mediaLXX: number;

}
export const screenSizes: ScreenSizes = {
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
  mediaXXL: 1480,
  mediaLX:1800,
  mediaLXX:2000,

};

export const GlobalStyle = createGlobalStyle`

body {
  background: #efebeb;
}

@font-face {
font-family: Bold;
src: url(${ManropeBold});
}

@font-face {
font-family: Regular;
src: url(${ManropeRegular});
}
@font-face {
font-family:ExtraBold;
src: url(${ManropeExtraBold});
}

@font-face {
font-family:Medium;
src: url(${ManropeMedium});
}

@font-face {
font-family:SemiBold;
src: url(${ManropeSemiBold});
}
@font-face {
font-family:Light;
src: url(${ManropeLight});
}
@font-face {
font-family:ExtraLight;
src: url(${ManropeExtraLight});
}
`;




