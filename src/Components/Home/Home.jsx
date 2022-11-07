import Header from "../Header/Header";
import Chaaracters from "../Characters/Characters";
import { useState, useEffect, useRef } from "react";
import {useObserve} from '../../CustomHooks/useObserve'
function Home() {
  const [character, setCharacter] = useState([]);
  const [comic, setComic] = useState([]);
  // let [offset, setOffset] = useState(0);
  const divRef = useRef();
  const [offset] = useObserve(divRef);

  const getCharacters = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=5&offset=${offset}&apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    setCharacter((prevs) => [...prevs, ...data.data.results]);
  };
  const comics = async () => {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/comics?limit=5&apikey=67fab671b7006d9a1f390f9ff7c7abb2"
    );
    const data = await response.json();
    setComic(data.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, [offset]);

  return (
    <>
      <Header comics={comic} />
      <Chaaracters characters={character} />
      <div ref={divRef} style={{ height: "10px" }}></div>
    </>
  );
}

export default Home;
