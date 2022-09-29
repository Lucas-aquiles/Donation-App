import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import icons from "../assets/copy.svg";
import { Colors } from "../styles/theme/Colors";


const ContainerFather= styled.div`
    width: 40%;
    height: auto;
    border: solid ${Colors.secundary};
    padding: 1rem;
`

const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #142F54;
  display: flex;
  flex-direction: column;

`;
const Image = styled.img`
  width: 80%;
  height: 80%;
  margin: 0px auto;
  padding-top: 1rem;


`;

const Text = styled.p`
  font-weight: 600;
  padding: 1rem;
  color: ${Colors.white} ;
  font-family: 'Poppins', cursive, sans-serif;
  font-size: 1.3rem;
`;

const Icons = styled.div`
  background-image: url(${icons});
  width: 20px;
  height: 20px;
  background-size: contain;
  cursor: pointer;
  color: red ;

`;

const Children = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`



const Cards = ({ image, name, cbu }) => {
  const [state, setState] = useState({
    value: `${cbu}`,
    copied: false,
  });

  function restart() {
    setTimeout(() => {
      setState({ ...state, copied: false });
    }, 1500);
  }

  return (
        <ContainerFather>  
    <ContainerCards>
      <Image src={image} />
      <Text>Institute: {name}</Text>

      <Children> 
      <Text>Bank account: {cbu} </Text>
      <CopyToClipboard
        text={state.value}
        onCopy={() => setState({ copied: true })}
      >
        <Icons onClick={restart} />
      </CopyToClipboard>
      {state.copied ? <Text>Copy</Text> : null}
      </Children>
      
    </ContainerCards>
    </ContainerFather>
  );
};

export default Cards;
