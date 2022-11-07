import { useState, useEffect, useRef } from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import {useObserve} from '../../CustomHooks/useObserve'

function Comics() {
  const [comic, setComic] = useState([]);
  // const [offset, setOffset] = useState(0);
  const divRef = useRef();
  const [offset] = useObserve(divRef);
  const comics = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?limit=7&offset=${offset}&apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    setComic((prev) => [...prev, ...data.data.results]);
  };


  useEffect(() => {
    comics();
  }, [offset]);

  return (
    <div>
      <h1 className="comic-h1">Comics</h1>
      {comic.map((el, i) => {
        return (
          <div key={i} className="comic-container">
            <Link to={`/comics/${el.id}`}>
              <div className="comic-title">{el.title}</div>
            </Link>
          </div>
        );
      })}
      <div ref={divRef}></div>
      <div></div>
    </div>
  );
}

export default Comics;
