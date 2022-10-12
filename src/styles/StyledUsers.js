import styled from "styled-components";



export const ContainerUsers = styled.div`
width: 100%;
height: 100vh;
`;

export const Children = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;

  padding-top: 100px;
       //mobile
       @media (max-width: 450px) {
      /* background-position: 0%; */
      flex-direction:column;
  }
`;