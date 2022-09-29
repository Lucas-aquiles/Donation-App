import React,{useContext}from 'react'
import { contextApp } from '../context/Context';

import { Navbar } from "../components/Navbar";
import MenuExtension from "../components/menu/MenuExtension"

export default function Users() {
  const {value2} = useContext(contextApp)
const data = value2[0]
console.log(data)

    return (


      <>
      <Navbar/>
      <MenuExtension />


        {data && data.map((e)=>{  
         return(<div>  
      <img src={e.image} alt="text"/> 
                  <p>{e.name}</p>
                  </div>)
        }
                  
          
        
        
          
         
        )}
      </>
    );
  }