import reactLogo from "./assets/react.svg";
import { useState, useEffect, useRef } from "react";
import Characters from "./Components/Characters/Characters";
import Header from "./Components/Header/Header";
import "./styles/index.css";

export function App() {
  const [character, setCharacter] = useState([]);
  const [comic, setComic] = useState([]);
  let [offset, setOffset] = useState(0);

  const getCharacters = async () => {
    console.log(offset);
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=5&offset=${offset}&apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    const characterz = (prevs) => {
      return [...prevs, ...data.data.results];
    };
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
    comics();
  }, []);

  const divRef = useRef();

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  useEffect(() => {
    let observer = new IntersectionObserver(() => {
      setOffset(prev => prev + 5);
    }, options);
    observer.observe(divRef.current);
    return () => {
      observer.unobserve(divRef.current);
    };
  }, [divRef]);
  useEffect(()=>{
    getCharacters();
  },[offset])

  return (
    <div className="home">
      <Header comics={comic} />
      <Characters characters={character} />
      <div ref={divRef} style={{ height: "10px" }}></div>
    </div>
  );
}
