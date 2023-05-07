import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <div>
      <Player
        src="https://assets7.lottiefiles.com/private_files/lf30_ipays02f.json"
        loop
        autoplay
        speed={1}
        style={{ width: '500px' }} />
    </div>
  );
};
