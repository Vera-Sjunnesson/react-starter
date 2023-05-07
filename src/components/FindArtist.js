/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const FindArtist = () => {
  const [details, setDetails] = useState({})
  const { name } = useParams()
  console.log(name)
  useEffect(() => {
    fetch(`https://project-express-api-qsyn7wqw7a-lz.a.run.app/artists/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.body.artist)
      });
  }, [name]);

  return (
    <div>
      <h2>Name:{details?.Name}</h2>
      <h2>Nationality:{details?.Nationality}</h2>
      <h2>Birth Year:{details?.Birth_Year}</h2>
    </div>
  )
}
