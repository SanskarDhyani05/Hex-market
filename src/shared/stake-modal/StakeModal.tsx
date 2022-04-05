import * as React from "react";
import { Button } from "../components/button";
import { ModalBody, ModalContent, ModelHead, Close, SubText, ButtonWrap, CancelButton } from "./style";

const StakeModal = (props: any) => {
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
        <SubText>
          Once staked, you're forced to delay gratification with HDRN for one
          year, but you can claim your rewards at any time. Ready to join the
          HDRN Staker club?
        </SubText>
        <ButtonWrap>
          <CancelButton onClick={() => toggleModal(!show)}>Cancel</CancelButton>
          <Button width="30%">Let's Go</Button>
        </ButtonWrap>
        {props.children}
      </ModalContent>
    </ModalBody>
  );
};
export default StakeModal;
