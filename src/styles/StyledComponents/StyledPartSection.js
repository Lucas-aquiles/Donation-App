import styled from "styled-components";
import { Colors } from "../theme/Colors";
import { Link } from "react-router-dom";



export const ContainerPart = styled.div`
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

export const TextSection = styled.p`
  /* border:solid */
  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  color: ${Colors.white};
  font-family: "Poppins", cursive, sans-serif;

  //mobile
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0px auto;
  position: relative;
  margin-top: 50px;
`;
