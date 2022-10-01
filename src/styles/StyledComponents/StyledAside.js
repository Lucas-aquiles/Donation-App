import styled from "styled-components";
import { Colors } from "../theme/Colors";

export const AsideContainer = styled.div`
  max-width: 100%;
  height: auto;
  border-top: solid ${Colors.white};
  background-color: ${Colors.primary};
  opacity: 0.97;
  padding-bottom: 2rem;

  //mobile
  @media (max-width: 450px) {
    height: auto;
  }
`;

export const TextAside = styled.div`
  color: ${Colors.white};
  width: 50%;
  margin: 0px auto;
  margin-top: 50px;
  font-size: 1.3rem;
  text-align: justify;
  line-height: 28px;
  letter-spacing: 1px;
  font-family: "Poppins", cursive, sans-serif;

  //mobile
  @media (max-width: 450px) {
    width: 71%;
    font-size: 1rem;
  }
`;