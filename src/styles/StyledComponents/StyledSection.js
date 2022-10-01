import styled from "styled-components";
import myImage from "../../assets/community.jpg";

export const ContainerSection = styled.div`
  /* border:solid */
  width: 100%;
  height: auto;
`;
export const Image = styled.div`
  background-image: url(${myImage});
  max-width: 100%;
  height: 85vh;
  position: relative;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-size: 100% 100%;
  clip-path: polygon(100% 0, 100% 91%, 66% 100%, 0 84%, 0 0);
  z-index: 10;

  //mobile
  @media (max-width: 450px) {
    height: 65vh;
    background-size:cover

  }
`;
