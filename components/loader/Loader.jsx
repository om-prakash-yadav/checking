import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className={styles.spinner}>
        <img className="h-full w-full" src="logo.svg" alt="" />
      </div>
    </div>
  );
}

export default Loader;
