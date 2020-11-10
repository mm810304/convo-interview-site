import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FaMinus, FaPlus} from 'react-icons/fa';

import patternsStyle from './patterns.module.css';

const Patterns = ({ patterns }) => {
  const [showPatterns, setShowPatterns] = useState(false);

  if (patterns) {
    return (
      <article className={patternsStyle.examplePatternsBox}>
        <header className={patternsStyle.header}>
          <h2>How You Can Answer This Interview Question</h2>
          <button
            className={patternsStyle.button}
            type="button"
            onClick={() => setShowPatterns(!showPatterns)}
          >
            {showPatterns ? <FaMinus /> : <FaPlus />}
          </button>
        </header>
        {showPatterns && <div className={patternsStyle.patternContainer}>{ReactHtmlParser(patterns)}</div>}
      </article>
    );
  } else {
    return (
      <React.Fragment></React.Fragment>
    )
  }

};

export default Patterns;