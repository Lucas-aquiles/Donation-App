import React from "react";
import fund from "../assets/patternpad.svg";
import factory from "../assets/factory.svg";
import arrowLeft from "../assets/left.svg"
import styled from "styled-components";
import { Link } from "react-router-dom";


const ArrowLeft = styled(Link)`
  background-image: url(${arrowLeft});
  background-repeat: no-repeat;
  background-size:contain;
  width: 50px;
  height: 50px;
  z-index: 9999;
  position: absolute;
  right: 20px;
  top:20px;
  cursor: pointer;

   //mobile
   @media (max-width: 450px) {
    width: 30px;
  height: 30px;  }
`

const ContainerBuilding = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url(${fund});
  background-size: 100% 100%;


    //mobile
    @media (max-width: 450px) {
      /* background-position: 0%; */
      background-size: cover;
      background-repeat: no-repeat;
      padding-top: 50%;

  }
`;
const Image = styled.div`
  background-image: url(${factory});
  max-width: 80%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 80vh;
  margin: 0px auto;
     //mobile
     @media (max-width: 450px) {
      /* background-position: 0%; */
      background-size: contain;
      background-repeat: no-repeat;
        height: 80%;
  }
`;

const Text = styled.p`
  color: white;
  font-family: 'Poppins', cursive, sans-serif;
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


       //mobile
       @media (max-width: 450px) {
      /* background-position: 0%; */
      margin-top: 1rem;
      font-size: 6vw;

  }
`;

const Building = () => {
  return (
    <ContainerBuilding>
      <Image>
        <Text> Construction Site      
</Text>
<ArrowLeft  Link to ="/" />
      </Image>
    </ContainerBuilding>
  );
};

export default Building;
