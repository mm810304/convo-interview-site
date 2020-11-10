import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './player.css';

const Player = ({ audioFile, autoPlayState }) => {
  return (
    <div>
      <ReactAudioPlayer 
        src={audioFile}
        controls
        controlsList="nodownload"
        autoPlay={autoPlayState}
      />
    </div>
  );
};

export default Player;