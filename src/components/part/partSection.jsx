import React from 'react'
import styled from 'styled-components';



const ContainerPart= styled.div`
    /* border:solid */
    width: 50%;
    height: 300px;
    border: solid;
    background-color:${props => props.inputColor || "#0084ff;"};

    margin-top: -90px;
    display: flex;
    text-align: center;
    align-items: center;

      `

const TextSection= styled.p`
    /* border:solid */
    width: 100%;
font-size:2rem;
    


      `
   

const partSection = (props) => {


  return (
    <ContainerPart  inputColor={props.inputColor} >
        <TextSection> {props.text} </TextSection>  
       </ContainerPart>
  )
}

export default partSection