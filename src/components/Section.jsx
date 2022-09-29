import React from "react";
import styled from "styled-components";
import myImage from "../assets/community.jpg";
import PartSection from "./PartSection";

const ContainerSection = styled.div`
  /* border:solid */
  width: 100%;
  height: auto;
`;
const Image = styled.div`
  background-image: url(${myImage});
  max-width: 100%;
  height: 85vh;
  position: relative;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-size: 100% 100%;
  clip-path: polygon(100% 0, 100% 91%, 66% 100%, 0 84%, 0 0);
  z-index: 10;
`;

const Section = () => {
  const text = "ONG";
  const text1 = "USERS";
  return (
    <ContainerSection>
      <Image />
      <div style={{ display: "flex" }}>
        <PartSection text={text} link={"/institution"} />
        <PartSection
          text={text1}
          textColor="#f8f9fa"
          inputColor="#F08868"
          link={"/users"}
        />
      </div>
    </ContainerSection>
  );
};

export default Section;
