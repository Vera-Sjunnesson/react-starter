import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { StyledParagraphSpanSmall } from './Styling';

export const ArtistsBornAfter = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)
  const { year } = useParams()

  useEffect(() => {
    setLoading(true);
    fetch(`https://project-express-api-qsyn7wqw7a-lz.a.run.app/born-after/${year}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.artist);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [year]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 10px', padding: '20px', justifyContent: 'stretch' }}>
      {list.map((artist) => (
        <Link
          style={{ textDecoration: 'none', flexGrow: '1' }}
          key={artist.Artist_ID}
          to={`/artists/${artist.Artist_ID}`}><StyledParagraphSpanSmall>{artist.Name}</StyledParagraphSpanSmall>
        </Link>
      ))}
    </div>
  );
};
