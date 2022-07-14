import React, { useState } from "react";
import s from "./title.styles.module.scss";

function Tiltle({ title  , tagline , font , margin}) {
  let words = title.split(" ");
  const style = {
    fontSize : `${font}px`,
    margin : `${margin}px 0`
  }
  return (
    <div className={s.four}>
  <h1 style={style} ><span className={s.tagline}>{tagline}</span> <span className={s.headWord} >{words[0]}</span> {words[1]}</h1>
</div>
    
  );
}

export default Tiltle;
