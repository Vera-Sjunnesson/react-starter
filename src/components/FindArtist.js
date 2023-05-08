/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Details, StyledParagraphText } from './Styling';

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
      <Details>
      {!details ? (
        <StyledParagraphText>Sorry, artist not found</StyledParagraphText>
      ) : (
        <>
          <StyledParagraphText>Name: {details?.Name}</StyledParagraphText>
          <StyledParagraphText>Nationality: {details?.Nationality}</StyledParagraphText>
          <StyledParagraphText>Birth Year: {details?.Birth_Year}</StyledParagraphText>
          <StyledParagraphText>Death Year: {details?.Death_Year}</StyledParagraphText>
        </>
      )}
    </Details>
  )
}
