import React,{useEffect} from "react";
import styled from "styled-components";
import myImage from "../../assets/community.jpg";

const ContainerLoading = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #142f54;
  display: flex;
  align-items: center;
`;

const Loader = styled.div`
  position: relative;
  width: 164px;
  height: 164px;
  margin: 0px auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #f08868;
    left: 50%;
    top: 50%;
    animation: rotate 1s ease-in infinite;
  }

  &::after {
    width: 20px;
    height: 20px;
    background-color: #e9582c;
    animation: rotate 1s ease-in infinite, moveY 1s ease-in infinite;
  }
  @keyframes moveY {
    0%,
    100% {
      top: 10%;
    }
    45%,
    55% {
      top: 59%;
    }
    60% {
      top: 40%;
    }
  }
  @keyframes rotate {
    0% {
      transform: translate(-50%, -100%) rotate(0deg) scale(1, 1);
    }
    25% {
      transform: translate(-50%, 0%) rotate(180deg) scale(1, 1);
    }
    45%,
    55% {
      transform: translate(-50%, 100%) rotate(180deg) scale(3, 0.5);
    }
    60% {
      transform: translate(-50%, 100%) rotate(180deg) scale(1, 1);
    }
    75% {
      transform: translate(-50%, 0%) rotate(270deg) scale(1, 1);
    }
    100% {
      transform: translate(-50%, -100%) rotate(360deg) scale(1, 1);
    }
  }
`;

export const Loading = () => {


  useEffect(() => {
    let imagen=  myImage
   
  }, [])


  return (
    <ContainerLoading>
      <Loader></Loader>
    </ContainerLoading>
  );
};
