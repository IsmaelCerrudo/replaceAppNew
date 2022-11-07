import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from '../Home/Loader'

function CharactersPage() {
  const { id } = useParams();
  const [dataCharacter, setDataCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCharactersById = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=67fab671b7006d9a1f390f9ff7c7abb2`
    );
    const data = await response.json();

    if (response.ok) {
      setDataCharacter(data.data.results);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      alert("Algo Salio mal");
    }
  };

  useEffect(() => {
    getCharactersById();
  }, []);
  return (
    <>
    {isLoading&&<Loading/>}
      {dataCharacter.map((el, i) => {
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
                let comicUrl = el.resourceURI;
                const comicId = comicUrl.replace(/[^0-9]+/g, "").slice(1);
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
