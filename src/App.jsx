import reactLogo from "./assets/react.svg";
import { useState, useEffect, useRef } from "react";
import Home from './Components/Home/Home'
import Comics from './Components/Comics/Comics'
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";

export function App() {
  

  return (
    <div className="home">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/comics' element={<Comics/>}/>
      </Routes>
    </div>
  );
}
