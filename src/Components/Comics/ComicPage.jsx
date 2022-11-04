import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect} from 'react'

function ComicPage() {
    let {id} = useParams()

    const getComicById = async ()=>{
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=67fab671b7006d9a1f390f9ff7c7abb2`);
        const data = await response.json();
        console.log(data);
    }
useEffect(() => {
  getComicById();

}, [])

  return (
    <div>ComicPage</div>
  )
}

export default ComicPage