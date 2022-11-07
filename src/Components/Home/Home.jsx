import Header from "../Header/Header";
import Chaaracters from "../Characters/Characters";
import Loading from './Loader'
import { useState, useEffect, useRef } from "react";
import { useObserve } from "../../CustomHooks/useObserve";
function Home() {
  const [character, setCharacter] = useState([]);
  const [comic, setComic] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const divRef = useRef();
  const [offset] = useObserve(divRef);

  const getCharacters = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=5&offset=${offset}&apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    if (response.ok) {
      const data = await response.json();
      setCharacter((prevs) => [...prevs, ...data.data.results]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      alert("Algo salio mal");
    }
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
    comics();
  }, [offset]);

  return (
    <>
      <Header comics={comic} />
      <Chaaracters characters={character} />
      {isLoading && <Loading/> }
      <div ref={divRef} style={{ height: "10px" }}></div>
    </>
  );
}

export default Home;
