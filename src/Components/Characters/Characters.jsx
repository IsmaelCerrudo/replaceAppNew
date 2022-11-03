import { useState, useEffect, useRef } from "react";
import "../../styles/index.css";
function Characters({ characters }) {
  return (
    <div className='main-container'>
      {characters.map((item, i) => {
        let jpg = item?.thumbnail?.extension;
        let url = item?.thumbnail?.path;
        return (
          <div key={i} className="character-container">
            <img className="img-fluid" src={`${url}.${jpg}`} />
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
