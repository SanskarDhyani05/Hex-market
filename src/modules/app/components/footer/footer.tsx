import React, { useState } from "react";
import { ArrowImg, FooterContainer, FooterImg, FooterWrap,} from "./style";
import img from "../../../../assets/icons/hexMarket.svg"
import arrow from "../../../../assets/icons/arrow.svg"
import copy from "../../../../assets/icons/copy.svg"

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterImg src={img} alt="img" />
        <FooterImg src={copy} alt="copy" />
      </FooterWrap>
      <ArrowImg src={arrow} alt="arrow"/>
    </FooterContainer>
  );
};

export default Footer;
