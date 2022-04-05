import React from 'react'
import { BodyHeading, Button, Container, Header, Heading, Logo, MainBody, SubHeading } from './style'
import logo from "../../assets/icons/white-logo.svg";
import Card from '../../shared/card';
import { FourColumns } from '../../shared/styles/styled';
import card from "../../assets/icons/card-image.svg";

const Homepage = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <Heading>Lorem Ipsum Dolor Sit</Heading>
        <SubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt a metus id
          <br /> iaculis. Duis sit amet sem sit amet leo egestas condimentum
          eget sed lacus.{" "}
        </SubHeading>
        <Button>Button Text</Button>
      </Header>
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

export default Homepage