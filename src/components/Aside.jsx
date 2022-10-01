import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/theme/Colors";
import { AsideContainer,TextAside } from "../styles/StyledComponents/StyledAside";


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
