import React, { useState } from "react";
import { Button } from "../../shared/components/button";
import StakeModal from "../../shared/stake-modal";
import {
  Amount,
  ButtonWrap,
  Container,
  Footer,
  FooterWrap,
  Header,
  Heading,
  InfoWrap,
  Input,
  MaxText,
  Para,
  StakeWrap,
  Sub,
  SubHeading,
  Text,
  Unstake,
} from "./style";

const Staking = () => {
  const [Stake, setStake] = useState(false);

  const OpenStake = () => {
    setStake(true);
  };
  const CloseStake = () => {
    setStake(false);
  };

  return (
    <Container>
      <Header>
        <StakeWrap>
          <Heading>Stake</Heading>
          <Sub>
            Stake Amount in HDRN{" "}
            <span style={{ fontFamily: "ExtraLight" }}>
              (50.1234 HDRN available)
            </span>
          </Sub>
          <div style={{ position: "relative" }}>
            <Input width="70%" margin="10px 0" />
            <MaxText>Max</MaxText>
          </div>
          <Text>
            *Warning: All stakes are 1 year. Expired stakes no longer earn
            rewards. No early unstakes allowed.
          </Text>
          <Button width="30%" margin="20px 0" onClick={OpenStake}>
            Stake
          </Button>
        </StakeWrap>
        <InfoWrap>
          <Heading>How does Staking work ?</Heading>
          <SubHeading>Lorem Ipsum Dolor Sit</SubHeading>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut mauris ullamcorper, fermentum sapien vel, dictum augue.
            Pellentesque purus lacus, tempor et quam nec, sodales bibendum quam.
            Pellentesque a consequat purus. Nunc rhoncus massa nisl, at rhoncus
            sapien consectetur quis. Mauris eu tortor tempor, ultricies risus
            convallis, iaculis purus. Curabitur finibus elementum odio, sit amet
            bibendum dui sollicitudin non.
          </Para>
          <SubHeading>Lorem Ipsum Dolor Sit</SubHeading>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut mauris ullamcorper, fermentum sapien vel, dictum augue.
            Pellentesque purus lacus, tempor et quam nec,{" "}
          </Para>
        </InfoWrap>
      </Header>
      <Footer>
        <Heading>Active Stakes</Heading>
        <FooterWrap>
          <Sub>Amount Staked (HDRN)</Sub>
          <Sub>Served Day</Sub>
          <Sub>End Date</Sub>
          <Sub>Unclaimed Rewards (ETH)</Sub>
          <Sub>Unclaimed Rewards (USD)</Sub>
        </FooterWrap>

        <FooterWrap>
          <Amount>10,000</Amount>
          <Amount>5/365</Amount>
          <Amount>January 1,2023</Amount>
          <Amount>10,000</Amount>
          <Amount>$2,656.00</Amount>
          <ButtonWrap>
            <Button width="95px" height="27px">
              Claim
            </Button>
            <Unstake>Unstake</Unstake>
          </ButtonWrap>
        </FooterWrap>

        <FooterWrap>
          <Amount>10,000</Amount>
          <Amount>5 / 365</Amount>
          <Amount>January 1, 2023</Amount>
          <Amount>10,000</Amount>
          <Amount>$2,656.00</Amount>
          <ButtonWrap>
            <Button width="95px" height="27px">
              Claim
            </Button>
            <Unstake>Unstake</Unstake>
          </ButtonWrap>
        </FooterWrap>

        <FooterWrap>
          <Amount>49,583,885</Amount>
          <Amount>100/365</Amount>
          <Amount>March 25, 2023</Amount>
          <Amount>2,5025</Amount>
          <Amount>$7,234.12</Amount>
          <ButtonWrap>
            <Button width="95px" height="27px">
              Claim
            </Button>
            <Unstake>Unstake</Unstake>
          </ButtonWrap>
        </FooterWrap>
        <FooterWrap>
          <Amount>10,000,000</Amount>
          <Amount>365 / 365</Amount>
          <Amount>March 5, 2022</Amount>
          <Amount>10.0000</Amount>
          <Amount>$26,560.12</Amount>
          <ButtonWrap>
            <Button width="95px" height="27px">
              {" "}
              Claim
            </Button>
            <Unstake>Unstake</Unstake>
          </ButtonWrap>
        </FooterWrap>
      </Footer>
      <StakeModal
        show={Stake}
        toggleModal={() => {
          CloseStake();
        }}
        heading="Are you sure ?"
      />
    </Container>
  );
};

export default Staking;
