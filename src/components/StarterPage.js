import React from 'react';
import gifAnimation from 'assets/gif_artwork.gif'

export const Startpage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={gifAnimation} alt="gif animation" style={{ width: '300px' }} />
    </div>
  )
}