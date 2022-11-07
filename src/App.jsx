import reactLogo from "./assets/react.svg";
import { useState, useEffect, useRef } from "react";
import Home from "./Components/Home/Home";
import Comics from "./Components/Comics/Comics";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import ComicPage from "./Components/Comics/ComicPage";
import CharactersPage from "./Components/Characters/CharactersPage";

export function App() {
  // const [idcomic, setIdcomic] = useState(0)

  useEffect(() => {
  }, []);

  return (
    <div className="home">
      <Routes>
        <Route path="/">
          <Route path="/home" element={<Home />} />
          <Route path=":id" element={<CharactersPage />} />
        </Route>
        <Route path="/comics">
          <Route path="" element={<Comics />} />
          <Route path=":id" element={<ComicPage />} />
        </Route>
      </Routes>
    </div>
  );
}
