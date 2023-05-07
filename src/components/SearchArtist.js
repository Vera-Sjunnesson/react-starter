/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gifAnimation from 'assets/gif_artwork.gif'
import { Form, Input } from './Styling';

export const SearchArtist = () => {
  const [artistName, setArtistName] = useState('');

  return (
    <Form>
      <img src={gifAnimation} alt="gif animation" style={{ width: '50px', marginRight: '20px' }} />
      <label htmlFor="name">
        <Input
          type="text"
          id="name"
          value={artistName}
          onChange={(event) => setArtistName(event.target.value)} />
      </label>
      <Link
        className="search-button"
        to={`/artists/name/${artistName}`}>SEARCH
      </Link>
    </Form>
  );
}