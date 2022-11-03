import { useState, useEffect } from "react";
import "../../styles/index.css";
function Header({ comics }) {
  //const [comic, setComic] = useState([]);


  return (
    <div>
      <h1 className="tittle">Catalogo Marvel</h1>
      <div className=" slider-container">
        {comics.map((item, i) => {
          return (
          <div className={`boton boton${i}`} key={i}>
              <a className="btn-tittle" href="#">
                {item.title}
              </a>
            </div>
          );
        })}
        <div className='boton boton-5'>
          <a className='btn-tittle' href="#">Ver Mas</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
