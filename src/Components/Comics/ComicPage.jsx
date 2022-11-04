import React from 'react'
import { useParams } from 'react-router-dom'

function ComicPage() {
    let {id} = useParams()
    console.log(id)
  return (
    <div>ComicPage</div>
  )
}

export default ComicPage