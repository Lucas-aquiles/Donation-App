import React from 'react'
import styled from 'styled-components';

import { Navbar } from '../components/Navbar';
import Section from '../components/Section';
import {Colors} from "../styles/theme/Colors"






const HomeContainer = styled.div`
    max-width: 100%;
    height: 100vh;
    background-color: ${Colors.secundary};
    
`


const Home = () => {



  return (
    <HomeContainer>
        <Navbar/>
        <Section/>
        </HomeContainer>
  )
}

export default Home