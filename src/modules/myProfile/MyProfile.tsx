import React, { useState } from "react";
import {
  BodyHeading,
  Button,
  Container,
  FourColumnWrap,
  Header,
  Heading,
  Logo,
  MainBody,
  SubHeading,
} from "./style";
import logo from "../../assets/icons/white-logo.svg";
import Card from "../../shared/card";
import { FourColumns } from "../../shared/styles/styled";
import ListCard from "../../shared/listCard";

const MyProfile = () => {
  return (
    <Container>
      <MainBody>
        <BodyHeading  >Your HEX Stakes</BodyHeading>
        <SubHeading>
          These are all of your HEX Stake Instances (HSI) within your wallet.
          Manage each listing below.
        </SubHeading>
        <FourColumnWrap>
          <FourColumns>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </FourColumns>
        </FourColumnWrap>
        <FourColumnWrap>
          <FourColumns>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </FourColumns>
        </FourColumnWrap>
        <FourColumnWrap>
          <FourColumns>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </FourColumns>
        </FourColumnWrap>
        <FourColumnWrap>
          <FourColumns>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </FourColumns>
        </FourColumnWrap>
      </MainBody>
      
    </Container>
  );
};

export default MyProfile;
