import { textColor } from "common/theme";
import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  ${LeftButton} {
    margin: 8px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: ${textColor};
  opacity: 0.65;
`;

const Buttons = styled.div``;

const DownArrow = styled.img`
  height: 40px;
  /* animation: animateDown infinite 1.5s; */
  overflow: hidden;

  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;

export default Section;
