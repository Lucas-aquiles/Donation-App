import React from "react";
import fund from "../assets/patternpad.svg";
import factory from "../assets/factory.svg";
import styled from "styled-components";

const ContainerBuilding = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url(${fund});
  
`;
const Image = styled.div`
  background-image: url(${factory});
  max-width: 80%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 80vh;
  margin: 0px auto;
`;

const Text = styled.p`
  color: white;
  font-family: "Caveat", cursive, sans-serif;
  font-size: 4vw;
  text-align: center;
  max-width: 100%;
  animation-name: breath-animation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  top: 0;

  @keyframes breath-animation {
    0% {
      opacity: 0.9;
      transform: scale(1, 1);
    }
    33% {
      opacity: 0.3;
      transform: scale(1.2, 1.2);
    }
    66% {
      opacity: 0.9;
      transform: scale(1.1, 1.1);
    }
    100% {
      opacity: 0.3;
      transform: scale(1, 1);
    }
  }
`;

const Building = () => {
  return (
    <ContainerBuilding>
      <Image>
        <Text> Construction Site</Text>
      </Image>
    </ContainerBuilding>
  );
};

export default Building;
