import styled from "styled-components";
import icons from "../../assets/copy.svg";
import { Colors } from "../theme/Colors";

export const ContainerFather = styled.div`
  width: 30%;
  height: auto;
  border: solid ${Colors.secundary};
  padding: 1rem;
  margin: 1rem;

  //mobile
  @media (max-width: 450px) {
    /* background-position: 0%; */
    margin: 0px auto;
    width: 90%;
    margin-bottom: 0.9rem;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #142f54;
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 80%;
  height: 80%;
  margin: 0px auto;
  padding-top: 1rem;
  //mobile
  @media (max-width: 450px) {
    /* background-position: 0%; */
    width: 90%;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  padding: 1rem;
  color: ${Colors.white};
  font-family: "Poppins", cursive, sans-serif;
  font-size: 1.3rem;
  //mobile
  @media (max-width: 450px) {
    padding: 1rem;
    font-size: 1.1rem;
  }
`;

export const TextAux = styled.p`
  font-weight: 600;
  padding: 1rem;
  color: ${Colors.white};
  font-family: "Poppins", cursive, sans-serif;
  font-size: 1.3rem;
  //mobile
  @media (max-width: 450px) {
    font-size: 1.1rem;
    position: absolute;
    top: -27px;
    right: 5px;
  }
`;

export const Icons = styled.div`
  background-image: url(${icons});
  width: 20px;
  height: 20px;
  background-size: contain;
  cursor: pointer;
  color: red;
`;

export const Children = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 450px) {
    position: relative;
  }
`;