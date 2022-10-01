import React from "react";
import PartSection from "./PartSection";
import { ContainerSection ,Image} from "../styles/StyledComponents/StyledSection";

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
