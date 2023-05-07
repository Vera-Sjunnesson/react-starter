/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gifAnimation from 'assets/gif_artwork.gif'
import { Form, Input } from './Styling';

export const SelectNationality = () => {
  const [nationality, setNationality] = useState('');

  return (
    <Form>
      <img src={gifAnimation} alt="gif animation" style={{ width: '50px', marginRight: '20px' }} />
      <label htmlFor="nationality">
        <Input
          type="text"
          id="nationality"
          value={nationality}
          onChange={(event) => setNationality(event.target.value)} />
      </label>
      <Link
        className="search-button"
        to={`/nationality/${nationality}`}>SEARCH
      </Link>
    </Form>
  );
};