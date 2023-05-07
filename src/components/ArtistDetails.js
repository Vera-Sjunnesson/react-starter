import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Details, StyledParagraphText } from './Styling';

export const ArtistDetails = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://project-express-api-qsyn7wqw7a-lz.a.run.app/artists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.body.artistsMoma)
      });
  }, [id]);

  return (
    <Details>
      <StyledParagraphText>Name: {details.Name}</StyledParagraphText>
      <StyledParagraphText>Nationality: {details.Nationality}</StyledParagraphText>
      <StyledParagraphText>Birth Year: {details.Birth_Year}</StyledParagraphText>
      <StyledParagraphText>Death Year: {details.Death_Year}</StyledParagraphText>
    </Details>
  )
}
