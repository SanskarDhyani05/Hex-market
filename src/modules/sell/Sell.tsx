import React, { useState } from "react";
import {
  AmountWrap,
  BackDiv,
  BackImg,
  BackText,
  Container,
  EthDiv,
  EthImg,
  Fee,
  FeeWrap,
  FlexDiv,
  Heading,
  ImageWrap,
  Input,
  MainBody,
  PriceText,
  PriceWrap,
  Service,
  TotalText,
  Wrapper,
  CardContainer,
} from "./style";
import back from "../../assets/icons/back.svg";
import eth from "../../assets/icons/eth.svg";
import { Button } from "../../shared/components/button";
import Card from "../../shared/card";
import bigCard from "../../assets/icons/big-card.svg";
import ListingModal from "../../shared/listing-modal";
import { Paths } from "../app/components/routes/types";
import history from "../app/components/history";
import {
  ColumnFlex,
  CardSub,
  CardFlexDiv,
  CardHeading,
  TokenImg,
  Image,
} from "../../shared/card/style";

import token from "../../assets/icons/eth.svg";

const Sell = () => {
  const [Listing, setListing] = useState(false);

  const OpenListing = () => {
    setListing(true);
  };
  const CloseListing = () => {
    setListing(false);
  };

  const toStakes = () => {
    history.push(Paths.myProfile);
  };
  return (
    <Container>
      <BackDiv>
        <BackImg src={back} alt="back" />
        <BackText onClick={toStakes}>Back to your HEX Stakes</BackText>
      </BackDiv>
      <MainBody>
        <Wrapper>
          <Heading>
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </Heading>
          <PriceWrap>
            <PriceText>Price</PriceText>
            <AmountWrap>
              <EthDiv>
                <EthImg src={eth} alt="eth" />
                ETH
              </EthDiv>
              <div style={{ position: "relative" }}>
                <Input />
                <TotalText>$123,456 Total</TotalText>
              </div>
            </AmountWrap>
          </PriceWrap>
          <FeeWrap>
            <Fee>Fee</Fee>
            <FlexDiv>
              <Service>Service Fees</Service>
              <p style={{ color: "#7c7c7c" }}>2.5 %</p>
            </FlexDiv>
          </FeeWrap>
          <Button width="30%" margin="20px 0" onClick={OpenListing}>
            Complete Listing
          </Button>
        </Wrapper>
        <ImageWrap>
          <CardContainer>
            <Image src={bigCard} alt="big" />
            <CardFlexDiv>
              <div>
                <CardHeading>Hex Stake Instance</CardHeading>
                <CardSub>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </CardSub>
              </div>
              <ColumnFlex>
                <CardHeading>Price</CardHeading>
                <CardFlexDiv>
                  <TokenImg src={token} alt="token" />
                  <CardSub style={{ fontSize: "22px" }}>0.3</CardSub>
                </CardFlexDiv>
                <CardHeading style={{ marginTop: "-18px" }}>$ 383</CardHeading>
              </ColumnFlex>
            </CardFlexDiv>
          </CardContainer>
        </ImageWrap>
      </MainBody>
      <ListingModal
        show={Listing}
        toggleModal={() => {
          CloseListing();
        }}
        heading="Complete Your Listing"
      />
    </Container>
  );
};

export default Sell;
