import React from "react";
import { ContainerPart ,TextSection,StyledLink} from "../styles/StyledComponents/StyledPartSection";


const PartSection = (props) => {
  return (
    <ContainerPart inputColor={props.inputColor}>
      <StyledLink to={props.link}>
        <TextSection textColor={props.textColor}> {props.text} </TextSection>
      </StyledLink>
    </ContainerPart>
  );
};

export default PartSection;
