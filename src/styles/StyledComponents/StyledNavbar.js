import styled from "styled-components";
import { Colors } from "../theme/Colors";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  width: 100%;
  height: 5rem;
  background: ${Colors.primary};

  opacity: 0.9;
  position: fixed;
  z-index: 90; ;
`;
 export const LinkTitle = styled(Link)`
  text-decoration:none;
`;
export const Title = styled.p`
  color: ${Colors.white};
  font-size: 3rem;
  font-family: 'Poppins', cursive, sans-serif;
  margin-left: 50px;
`;
export const Text = styled.p`
    color: ${Colors.white};
  font-size: 1rem;
  font-family: 'Poppins', cursive, sans-serif;
  margin-left: 5rem;
  align-self: flex-end;
  margin-bottom: 1rem;
 //mobile
 @media (max-width: 450px) {
    font-size: 1rem;
    position: relative;
    left: -70px;
    bottom: -5px;
  }

`
export const ContainerDiv =styled.div`
  display: flex;
`