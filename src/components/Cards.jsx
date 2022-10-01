import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ContainerCards,ContainerFather,Image,Text ,TextAux, Icons, Children} from "../styles/StyledComponents/StyledCard";


const Cards = ({ image, name, cbu, localidad, address,nameUser }) => {
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
          {state.copied ? <TextAux>Copy</TextAux> : null}
        </Children>

          {nameUser&&( <><Text>Localidad: {localidad} </Text>
          <Text>Addres: {address} </Text>
          </>
          )}


      </ContainerCards>
    </ContainerFather>
  );
};

export default Cards;
