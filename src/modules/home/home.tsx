import React from 'react'
import { BodyHeading, Button, Container, Heading, Logo, MainBody, SubHeading } from './style'
import logo from "../../assets/icons/white-logo.svg";
import Card from '../../shared/card';
import { FourColumns } from '../../shared/styles/styled';
import card from "../../assets/icons/card-image.svg";

const Home= () => {
  return (
    <Container>
      <MainBody>
        <BodyHeading>1,234 Items</BodyHeading>
        <FourColumns style={{ marginTop: "20px" }}>
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
        </FourColumns>
        <FourColumns style={{ marginTop: "20px" }}>
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
        </FourColumns>
        <FourColumns style={{ marginTop: "20px" }}>
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
        </FourColumns>
        <FourColumns style={{ marginTop: "20px" }}>
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
          <Card img={card} />
        </FourColumns>
      </MainBody>
    </Container>
  );
}

export default Home