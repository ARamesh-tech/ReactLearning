import React from 'react'
import "./Hero.css"
import Card from "../Card/Card";
import ARamesh_kumaran__ from "../../assets/ARamesh_kumaran__.PNG"
import ASathesh_Kumaran from "../../assets/ASathesh_Kumaran.jpeg"

function Hero() {
  return (
    <div className='hero'>
        <Card imageUrl={ARamesh_kumaran__} name="A.Ramesh" role="Date Engineer"/>
        <Card imageUrl={ASathesh_Kumaran} name="A.Sathesh" role="Mechanical Engineer"/>
        {/* <Card/> */}
    </div>
  )
}

export default Hero