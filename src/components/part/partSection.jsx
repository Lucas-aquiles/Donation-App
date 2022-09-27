import React from 'react'
import styled from 'styled-components';



const ContainerPart= styled.div`
    /* border:solid */
    width: 50%;
    height: 300px;
    border: solid;
    background-color:${props => props.inputColor || "#0084ff;"};

    margin-top: -90px;

      `


   

const partSection = (props) => {
console.log(props)


  return (
    <ContainerPart  inputColor={props.inputColor} />
  )
}

export default partSection