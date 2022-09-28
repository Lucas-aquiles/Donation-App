import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../styles/theme/Colors';
import { Link } from "react-router-dom";


const ContainerPart= styled.div`
    /* border:solid */
    width: 50%;
    height: 200px;
    background-color:${props => props.inputColor || Colors.primary};

    margin-top: -90px;
    display: flex;
    text-align: center;
    align-items: center;
    transition: .5s ease;
  backface-visibility: hidden;
      `

const TextSection= styled.p`
    /* border:solid */
    width: 100%;
font-size:3rem;
font-weight: 900;
color:${Colors.white};
font-family: 'Caveat', cursive,sans-serif;

      `
   
  
  
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;



const partSection = (props) => {


  return (
    <ContainerPart  inputColor={props.inputColor}  >
      <StyledLink to={props.link}>
        <TextSection textColor={props.textColor}> {props.text} </TextSection>  
        </StyledLink>
       </ContainerPart>
  )
}

export default partSection