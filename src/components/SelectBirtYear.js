/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gifAnimation from 'assets/gif_artwork.gif'
import { Form, Select } from './Styling';

export const SelectBirtYear = () => {
  const [bornAfter, setBornAfter] = useState('');
  return (
    <Form>
      <img src={gifAnimation} alt="gif animation" style={{ width: '50px', marginRight: '20px' }} />
      <label htmlFor="birthyear">
        <Select
          id="birthyear"
          aria-label="Drop down menu to select a year born after"
          onChange={(event) => setBornAfter(event.target.value)}
          value={bornAfter}>
          <option value="" disabled>Born after</option>
          <option value="1850">1850</option>
          <option value="1900">1900</option>
          <option value="1950">1950</option>
          <option value="1970">1970</option>
          <option value="1990">1990</option>
        </Select>
      </label>
      <Link
        className="search-button"
        to={`/born-after/${bornAfter}`}>SEARCH
      </Link>
    </Form>
  )
}