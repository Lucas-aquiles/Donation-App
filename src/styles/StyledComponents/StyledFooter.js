import styled from 'styled-components'
import { Colors } from "../theme/Colors";



export const ContainerFooter = styled.div`
    width: 100%;
    height: auto;
    border-top:solid white;
    background-color: ${Colors.secundary};
    display: grid;
    grid-template-columns: repeat(4,auto);

    @media (max-width: 450px) {
    justify-content: space-around;
    
  }

`
export const ColumText = styled.h2`
    width: auto;
    display: grid;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: ${Colors.white};
    cursor: pointer;
    font-family: 'Poppins', cursive, sans-serif;
    font-weight: 500;

    @media (max-width: 450px) {
    font-size: 1rem;
    
  }
`
