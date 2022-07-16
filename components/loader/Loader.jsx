import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      
        <img className="h-40" src="loader.svg" alt="" />
    
    </div>
  );
}

export default Loader;
