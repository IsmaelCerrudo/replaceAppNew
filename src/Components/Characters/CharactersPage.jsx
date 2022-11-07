import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

function CharactersPage() {
  const { id } = useParams();
  const [dataCharacter, setDataCharacter] = useState([]);
  const getCharactersById = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();
    setDataCharacter(data.data.results);
  };

  useEffect(() => {
    getCharactersById();
  }, []);
  return (
    <>
      {dataCharacter.map((el, i) => {
        console.log(el);
        let path = el.thumbnail.path;
        let extension = el.thumbnail.extension;
        let title = el.comics.items;
        return (
          <div key={i}>
            <div className="character-page-container">
              <img
                className="img-fluid"
                src={`${path}.${extension}`}
                alt={el.name}
              />
              <h3 className="character-title">{el.name}</h3>
              <p className="character-title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                vero dolore ipsa debitis deleniti sint omnis maxime nulla. Qui
                asperiores aut deleniti. Iusto cumque asperiores ipsum illo?
                Neque, aperiam dolorem?
              </p>
            </div>
            <>
              {title.map((el, i) => {
                let comicUrl= el.resourceURI
                console.log(comicUrl)
                const comicId = comicUrl.replace(/[^0-9]+/g, '').slice(1);
                console.log(comicId)
                return (
                  <div className="comic-container" key={i}>
                    <Link to={`/comics/${comicId}`}>
                      <div className="comic-title">{el.name}</div>
                    </Link>
                  </div>
                );
              })}
            </>
          </div>
        );
      })}
    </>
  );
}

export default CharactersPage;
