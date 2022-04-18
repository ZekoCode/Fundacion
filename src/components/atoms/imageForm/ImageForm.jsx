import React from "react";
import './style.css'

function ImageForm({url,alt}){
    return (
      <img className="img--form" src={url} alt={alt}/>
    )
  }
  
  
  export default ImageForm