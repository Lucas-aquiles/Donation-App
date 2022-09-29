import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/theme/Colors";
import { Link } from "react-router-dom";

const ContainerPart = styled.div`
  /* border:solid */
  width: 50%;
  height: 200px;
  background-color: ${(props) => props.inputColor || Colors.primary};
  opacity: 0.97;
  margin-top: -90px;
  display: flex;
  text-align: center;
  align-items: center;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const TextSection = styled.p`
  /* border:solid */
  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  color: ${Colors.white};
  font-family: 'Poppins', cursive, sans-serif;
`;

const StyledLink = styled(Link)`
  margin: 0px auto;
  position: relative;
  margin-top: 50px;
`;

const PartSection = (props) => {
  return (
    <ContainerPart inputColor={props.inputColor}>
      <StyledLink to={props.link}>
        <TextSection textColor={props.textColor}> {props.text} </TextSection>
      </StyledLink>
    </ContainerPart>
  );
};

export default PartSection;
