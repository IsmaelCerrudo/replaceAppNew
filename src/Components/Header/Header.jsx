import { useState, useEffect } from "react";
import "../../styles/index.css";
import {Link} from 'react-router-dom'
function Header({ comics }) {
  //const [comic, setComic] = useState([]);


  return (
    <div>
      <h1 className="tittle">Catalogo Marvel</h1>
      <div className=" slider-container">
      <div className='boton'>
            <Link className='btn-tittle' to='/'>Home</Link>
        </div>
        {comics.map((item, i) => {
         
          return (
          <div className={`boton`} key={i}>
              <Link className="btn-tittle" to={`/comics/${item.id}`}>
                <div className="btn-title">{item.title}</div>
              </Link>
            </div>
          );
        })}
        <div className='boton'>
          <Link className='btn-tittle' to='/comics'>Ver Mas</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
