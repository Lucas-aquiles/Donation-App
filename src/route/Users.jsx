import React, { useContext, useState } from "react";
import { contextApp } from "../context/Context";
import { Navbar } from "../components/Navbar";
import Cards from "../components/Cards";
import {Loading} from "../components/loading/Loading"
import { ContainerUsers, Children } from "../styles/StyledUsers";


export default function Users() {
  const [controlModalLogin, setControlModalLogin] = useState(false);
  const { value2 } = useContext(contextApp);
  const { value3 } = useContext(contextApp);
  const { value4 } = useContext(contextApp);
  let valueModal = value3[0];
  const data = value2[0];
  const setName = value4[1];
  const nameuser = value4[0];

  
return  data.length === 0 ? (<Loading/>) : (
    <ContainerUsers>
    

      <Navbar nameUser={nameuser} hidden={false} />
      

      <Children>
        {data &&
          data.map((e, index) => {
            return (
              <Cards key={index} image={e.image} name={e.name}
               cbu={e.cbu} localidad={e.localidad}
              nameUser={nameuser}
              address={e.address}/>
            );
          })}
      </Children>
    </ContainerUsers>
  );




}
