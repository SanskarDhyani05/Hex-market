import * as React from "react";
import {
  ModalBody,
  ModalContent,
  ModelHead,
  Close,
} from "./style";

const CustomModal = (props: any) => {
  const { show, toggleModal, borderRadius, heading, styles, headIcon } =
    props;

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
        <ModelHead>
          <h2>
            {heading}
            {/* {headIcon  && (
              <img alt='headicon' style={{ margin: "-11px 12px" ,height:'36px'}} src={`${headIcon}`} />
            )} */}
          </h2>
          <Close
            onClick={() => toggleModal(!show)}
            src={require("../../assets/icons/close-grey.svg").default}
          />
        </ModelHead>
        {props.children}
      </ModalContent>
    </ModalBody>
  );
};
export default CustomModal;
