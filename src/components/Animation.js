import React from 'react';
import gifAnimation from 'assets/gif_artwork.gif'

export const Animation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
      <img src={gifAnimation} alt="gif animation" style={{ width: '300px' }} />
    </div>
  )
}