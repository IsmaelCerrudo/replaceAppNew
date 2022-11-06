import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useObserve } from "../../CustomHooks/useObserve";



function ComicPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const divRef = useRef();
  const [offset] = useObserve(divRef);
  const getComicById = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    setData(data.data.results);
  };

  const getCharacters = async ()=> {
    const response = await fetch(`http://gateway.marvel.com/v1/public/comics/82967/characters`);
    const data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    getComicById();
    getCharacters();
    console.log(data)
    console.log(offset);
  }, []);

  return (
    <div>
      {data.map((el,i)=>(
        <div key={i}>

        </div>
      ))}
      <div ref={divRef}></div>
    </div>
  );
}

export default ComicPage;
