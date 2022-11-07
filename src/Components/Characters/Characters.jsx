import { Link } from "react-router-dom";

import "../../styles/index.css";
function Characters({ characters }) {
  return (
    <div className="main-container">
      {characters.map((item, i) => {
        let jpg = item?.thumbnail?.extension;
        let url = item?.thumbnail?.path;
        return (
          <div key={i} className="character-container">
            <Link to={`/${item.id}`}>
              <img className="img-fluid" src={`${url}.${jpg}`} />
              <h3>{item.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
