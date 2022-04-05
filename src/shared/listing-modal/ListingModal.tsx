import * as React from "react";
import { ModalBody, ModalContent, ModelHead, Close,Image, CardWrap, Heading, Sub, ColumnFlex, FlexDiv, TokenImg, MainBody, InfoWrap, NumberDiv, Number, InfoHeading, InfoSub } from "./style";
import img  from "../../assets/icons/card-image.svg"
import token from "../../assets/icons/eth.svg";

const ListingModal = (props: any) => {
  const { show, toggleModal, borderRadius, heading, styles, headIcon } = props;

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <ModalBody
      show={show}
      onMouseDown={handleClickOutside}
      style={{ ...styles }}
    >
      <ModalContent borderRadius={borderRadius}>
        <Close
          onClick={() => toggleModal(!show)}
          src={require("../../assets/icons/close-grey.svg").default}
        />
        <ModelHead>
          <h2>
            {heading}
            {/* {headIcon  && (
              <img alt='headicon' style={{ margin: "-11px 12px" ,height:'36px'}} src={`${headIcon}`} />
            )} */}
          </h2>
        </ModelHead>
        <CardWrap>
          <Image src={img} />
          <FlexDiv>
            <div>
              <Heading>Hex Stake Instance</Heading>
              <Sub>
                Lorem ipsum dolor sit amet consectetur
                <br />
                adipiscing elit
              </Sub>
            </div>
            <ColumnFlex>
              <Heading>Price</Heading>
              <FlexDiv>
                <TokenImg src={token} alt="token" />
                <Sub style={{ fontSize: "22px" }}>0.3</Sub>
              </FlexDiv>
              <Heading style={{ marginTop: "-18px" }}>$ 383</Heading>
            </ColumnFlex>
          </FlexDiv>
        </CardWrap>
        <MainBody>
          <InfoWrap>
            <NumberDiv>
              <Number>1</Number>
            </NumberDiv>
            <div>
              <InfoHeading>Initialize Your Wallet</InfoHeading>
              <InfoSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices, augue quis dapibus gravida, justo lectus ultricies
                dolor,
              </InfoSub>
            </div>
          </InfoWrap>
          <InfoWrap>
            <NumberDiv>
              <Number>2</Number>
            </NumberDiv>
            <div>
              <InfoHeading>Approve This Item For Sale</InfoHeading>
              <InfoSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices, augue quis dapibus gravida, justo lectus ultricies
                dolor,
              </InfoSub>
            </div>
          </InfoWrap>
          <InfoWrap>
            <NumberDiv>
              <Number>3</Number>
            </NumberDiv>
            <div>
              <InfoHeading>Confirm 0.3 ETH Listing</InfoHeading>
              <InfoSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices, augue quis dapibus gravida, justo lectus ultricies
                dolor,
              </InfoSub>
            </div>
          </InfoWrap>
        </MainBody>
        {props.children}
      </ModalContent>
    </ModalBody>
  );
};
export default ListingModal;
