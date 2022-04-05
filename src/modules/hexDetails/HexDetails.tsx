import React from "react";
import { BackDiv, BackImg, BackText } from "../sell/style";
import {
  Amount,
  AmountWrapper,
  CardImg,
  Completed,
  CompletionDiv,
  Container,
  Date,
  DetailWrapper,
  Div,
  FlexDiv,
  FlexDiv1,
  Head,
  Heading,
  ImgWrap,
  Info,
  InfoWrap,
  ModifiedWrap,
  OwnedText,
  Sub,
  TimeWrap,
  Token,
  Wrap,
  Wrapper,
} from "./style";
import back from "../../assets/icons/back.svg";
import { Paths } from "../app/components/routes/types";
import history from "../app/components/history";
import bigCard from "../../assets/icons/big-card.svg";
import { ThreeColumns, TwoColumns } from "../../shared/styles/styled";
import token from "../../assets/icons/eth.svg";
import { Button } from "../../shared/components/button";

const HexDetails = () => {
  const toHome = () => {
    history.push(Paths.home);
  };
  const toMyProfile = () => {
    history.push(Paths.myProfile);
  };
  return (
    <Container>
      <BackDiv onClick={toHome}>
        <BackImg src={back} alt="back" />
        <BackText>View All</BackText>
      </BackDiv>

      <Wrapper>
        <ImgWrap>
          <CardImg src={bigCard} />
        </ImgWrap>

        <InfoWrap>
          <Heading>Hex Stakes Instance</Heading>
          <Sub>Lorem ipsum dolor sit amet consectetur adipiscing elit</Sub>
          <OwnedText>
            Owned by:{" "}
            <span style={{ color: "rgba(94, 114, 228, 1)" }}>0xc3…</span>
          </OwnedText>
          <TwoColumns>
            <AmountWrapper>
              <Wrap>
                <ThreeColumns>
                  <Head></Head>
                  <Head>USD</Head>
                  <Head>HEX</Head>
                </ThreeColumns>
              </Wrap>
              <Wrap style={{ borderBottom: "none" }}>
                <ThreeColumns>
                  <Head>Principal</Head>
                  <Amount>$26,337</Amount>
                  <Amount>184,863</Amount>
                </ThreeColumns>
              </Wrap>
              <ModifiedWrap>
                <ThreeColumns>
                  <Head>Interest</Head>
                  <Amount>$7,272</Amount>
                  <Amount>50,339</Amount>
                </ThreeColumns>
              </ModifiedWrap>
              <Wrap>
                <ThreeColumns>
                  <Head>Total</Head>
                  <Amount>$33,509</Amount>
                  <Amount>235,202</Amount>
                </ThreeColumns>
              </Wrap>
            </AmountWrapper>
            <DetailWrapper>
              <CompletionDiv>
                <Completed>4.84 %</Completed>
                Completed
              </CompletionDiv>
              <TimeWrap>
                <Div>
                  <Date>June 3,2021</Date>
                  <Info>Stake Start Date</Info>
                </Div>{" "}
                <Div>
                  <Date>August 15,2036</Date>
                  <Info>Stake End Date</Info>
                </Div>
                <Div>
                  <Date>In 2 Years</Date>
                  <Info>Stake Ends</Info>
                </Div>
                <Div>
                  <Date>181.9 T-Shares</Date>
                  <Info>$500,000</Info>
                </Div>
              </TimeWrap>
            </DetailWrapper>
          </TwoColumns>
          <Heading>Price</Heading>
          <FlexDiv1>
            <Token src={token} />
            <Sub>0.3</Sub>
            <p> $343</p>
          </FlexDiv1>
          <OwnedText>Emergency End Stake Value: $10,000</OwnedText>
          <Button onClick={toMyProfile} width="50%" margin="20px 0">
            Buy Now
          </Button>
        </InfoWrap>
      </Wrapper>
    </Container>
  );
};

export default HexDetails;
