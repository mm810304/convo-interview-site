import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import dialogueStyle from './dialogue.module.css';

const Dialogue = (props) => {
  const originalText = props.dialogue;
  return (
    <div className={dialogueStyle.container}>
      {ReactHtmlParser(originalText)}
    </div>
  );
};

export default Dialogue;