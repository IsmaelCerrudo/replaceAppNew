import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useObserve } from "../../CustomHooks/useObserve";
import '../../styles/index.css'
import logo from '../../assets/react.svg'

function ComicPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [dataCharacter, setDataCharacter] = useState([]);
  const divRef = useRef();
  const [offset] = useObserve(divRef);
  const getComicById = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    setData(data.data.results);
  };

  const getCharacters = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?limit=5&offset=${offset}&apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getComicById();
    getCharacters();

  }, [offset]);

  return (
    <div>
      {data.map((el, i) => {
        let path = el?.images[i]?.path ;
        let extension = el?.images[i]?.extension
        return(
        <div className='comic-page-container' key={i}>
          <img className='logo-comic' src={path== undefined ? logo: `${path}.${extension}`} alt="" />
          <h2 className='comic-page-title'>{el.title}</h2>
        </div>
      )})}
      <div ref={divRef}></div>
    </div>
  );
}

export default ComicPage;
