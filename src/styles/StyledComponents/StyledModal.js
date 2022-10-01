import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  border: solid;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
  position: absolute;
  display: flex;
  /* display: ${(props) => (props.primary ? "none" : "flex")}; */
  cursor: pointer;

  //mobile
  @media (max-width: 450px) {
    height: 120vh;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;