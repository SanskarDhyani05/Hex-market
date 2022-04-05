import React from 'react'
import { Buy, ColumnFlex, CardContainer, CardFlexDiv, CardHeading, Image, CardSub, TokenImg } from './style'

import token from "../../assets/icons/eth.svg"
import { Paths } from '../../modules/app/components/routes/types';
import history from '../../modules/app/components/history';


const Card = (props:any) => {
  const {img}= props;

  const toHexDetails= () => {
    history.push(Paths.hexDetails);
  };

  return (
    <CardContainer onClick={toHexDetails}>
      <Image src={img} alt="img"/>
      <CardFlexDiv>
        <div>
          <CardHeading>Hex Stake Instance</CardHeading>
          <CardSub>Lorem ipsum dolor sit amet consectetur adipiscing elit</CardSub>
        </div>
        <ColumnFlex>
          <CardHeading>Price</CardHeading>
          <CardFlexDiv>
            <TokenImg src={token} alt="token" />
            <CardSub style={{ fontSize: "22px" }}>0.3</CardSub>
          </CardFlexDiv>
          <CardHeading style={{marginTop:'-18px'}}>$ 383</CardHeading>
        </ColumnFlex>
      </CardFlexDiv>
      <Buy >Buy Now</Buy>
    </CardContainer>
  );
}

export default Card