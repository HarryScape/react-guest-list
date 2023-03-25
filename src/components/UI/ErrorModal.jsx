import styled from "styled-components";
import React, { useState } from "react";
import ReactDom from "react-dom";
import Button from "./Button";

const StyledErrorModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  align-items: flex-start;
  text-align: center;
  min-width: 20%;
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

function ErrorModal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <StyledModalOverlay onClick={onClose} />
      <StyledErrorModal>
        <h1>Invalid Input</h1>
        <p>{children}</p>
        <Button onClick={onClose}>Close Modal</Button>
      </StyledErrorModal>
    </>,
    document.getElementById("portal")
  );
}

export default ErrorModal;
