import React, { useContext, useState } from "react";
import { Navbar } from "../components/Navbar";
import { contextApp } from "../context/Context";
import styled from "styled-components";
import { Colors } from "../styles/theme/Colors";

const ContainterExtension = styled.div`
  width: 100%;
  height: auto;
  background-color: ${Colors.secundary};
    //mobile
    @media (max-width: 450px) {
  height: auto;
  max-width:100% ;
}
`;
const ImagenPartOne = styled.div`
  background-image: url("https://opensocietyfoundations.imgix.net/uploads/de344b3c-cbb5-4704-b52d-e2b5e953f180/20191009-osf-solidarity-notext.jpg?auto=compress%2Cformat&fit=min&fm=jpg&h=430&q=80&rect=0%2C0%2C1920%2C1080&w=760");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  clip-path: polygon(0 0, 100% 0, 100% 30%, 100% 86%, 41% 100%, 0 83%, 0% 30%);
  position: relative;
  //mobile
  @media (max-width: 450px) {
  height: 400px;  
  clip-path: polygon(0 0, 100% 0, 100% 30%, 100% 86%, 100% 100%, 0 83%, 0% 30%);
}

`;
const Text = styled.div`
  font-size: 5rem;
  color: ${Colors.white};
  position: absolute;
  bottom: 40%;
  left: 10%;
  font-weight: 700;
  /* background-color:#25272b46; */
  border-radius: 20px;
  font-family: "Poppins", cursive, sans-serif;
  padding: 1rem;
  text-shadow: -1px -4px 6px rgba(0, 0, 0, 0.43);

    //mobile
    @media (max-width: 450px) {
      font-size: 2rem;
}
`;
const PartOne = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin-top: 5rem;
      //mobile
      @media (max-width: 450px) {
        margin-top: 0.5rem;
        flex-direction: column-reverse;
        width: 100%;
}
`;
const Imagentwo = styled.div`
  position: relative;
  width: 50%;
  height: 400px;
  background-size: auto;
  background-image: url("https://comunal.social/wp-content/uploads/2021/01/9.-portada-1-645x300.jpg");
  background-repeat: no-repeat;
        //mobile
        @media (max-width: 450px) {
          width: 100%;
          height: 200px;
          margin: 0px auto;
}
`;
const Text1 = styled.div`
  font-size: 1.8rem;
  color: ${Colors.white};
  font-weight: 700;
  font-family: "Poppins", cursive, sans-serif;
  width: 50%;
  margin-top: 2rem;
  padding-left: 1.5rem;
          //mobile
          @media (max-width: 450px) {
          width: 90%;
          font-size: 1rem;
          margin-top: 0.5rem;
          margin: 0px auto;
          margin-bottom: 1rem;




}
`;
const TextEnd = styled(Text1)`
  width: 80%;
  margin: 0px auto;
  margin-top:2rem;

`;

const SectionEnd = styled.div`
  background-color: ${Colors.primary};
  height: auto;
  width: 100%;
  padding:1rem;
`;

const AboutUs = () => {
  const { value4 } = useContext(contextApp);
  const nameuser = value4[0];

  return (
    <ContainterExtension>
      <Navbar nameUser={nameuser} />
      <ImagenPartOne>
        <Text>About us</Text>
      </ImagenPartOne>
      <PartOne>
        <Imagentwo />
        <Text1>
          We are more than 40,000 volunteers in 3,500 work teams and we are in
          every corner of the country. We accompany individuals, families and
          communities in situations of exclusion and vulnerability.
        </Text1>
      </PartOne>
      <SectionEnd>
        <TextEnd> Our Mission</TextEnd>
        <TextEnd>
          To give integral answers to the problems of poverty based on the
          values of dignity, justice and solidarity. Promote social relations,
          promoting solidarity awareness and inviting society as a whole to meet
          in the action of sharing and thus build a more just and peaceful
          reality.
        </TextEnd>
      </SectionEnd>
    </ContainterExtension>
  );
};

export default AboutUs;
