import React from "react"
import './TextHeader.css';
import imgURL from "../assets/avatar.jpg";
const TextHeader = () =>{
return <header>
      <img src={imgURL} alt="标签"/>
      <h1> Hello</h1>
      <h2> MY NAME IS KAMIL 24 YO AND THIS IS MY RESUME/CV</h2>
      </header>

}

export default TextHeader;