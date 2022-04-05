import React from 'react'
import { Buy, ColumnFlex, Container, FlexDiv, Heading, Image, Sub, TokenImg } from './style'
import card from "../../assets/icons/card-image.svg"
import token from "../../assets/icons/eth.svg"
import history from '../../modules/app/components/history'
import { Paths } from '../../modules/app/components/routes/types'


const ListCard = () => {
  const toSell = () => {
    history.push(Paths.sell);
  };
  return (
    <Container onClick={toSell}>
      <Image src={card} />
      <FlexDiv>
        <div>
          <Heading>Hex Stake Instance</Heading>
          <Sub>Lorem ipsum dolor sit amet consectetur adipiscing elit</Sub>
        </div>
        <ColumnFlex>
          <Heading>Price</Heading>
          <FlexDiv>
            <TokenImg src={token} alt="token" />
            <Sub style={{ fontSize: "22px" }}>0.3</Sub>
          </FlexDiv>
          <Heading style={{marginTop:'-18px'}}>$ 383</Heading>
        </ColumnFlex>
      </FlexDiv>
      <Buy>List For Sale</Buy>
    </Container>
  );
}

export default ListCard