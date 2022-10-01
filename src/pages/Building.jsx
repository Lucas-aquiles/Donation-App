import React from "react";
import {
  ArrowLeft,
  ContainerBuilding,
  Image,
  Text,
} from "../styles/StyledBuilding";

const Building = () => {
  return (
    <ContainerBuilding>
      <Image>
        <Text> Construction Site</Text>
        <ArrowLeft Link to="/" />
      </Image>
    </ContainerBuilding>
  );
};

export default Building;
