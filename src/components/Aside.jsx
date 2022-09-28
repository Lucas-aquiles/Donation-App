import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/theme/Colors";

const AsideContainer = styled.div`
  max-width: 100%;
  height: 60vh;
  border-top: solid ${Colors.white};
  background-color: ${Colors.primary};
`;

const TextAside = styled.div`
  color: ${Colors.white};
  width: 50%;
  margin: 0px auto;
  margin-top: 50px;
  font-size: 1.3rem;
  text-align: justify;
  line-height: 28px;
  letter-spacing: 1px;
  font-family: "Caveat", cursive, sans-serif;
`;

const Aside = () => {
  return (
    <AsideContainer>
      <TextAside>
        Human promotion: Seeks to modify, improve and bring about changes that
        improve the living conditions of the poorest. It requires incorporating
        people in the search for solutions to their problems together with
        others. This moment is less immediate in its effects but more durable,
        which requires work from the planning with the person and the community.
      
      </TextAside>
    </AsideContainer>
  );
};

export default Aside;
