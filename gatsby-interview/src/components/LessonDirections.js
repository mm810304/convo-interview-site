import React, { useState } from 'react';
import { FaMinus, FaPlus} from 'react-icons/fa';

import LessonDirectionsStyle from './lessondirections.module.css';

const LessonDirections = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className={LessonDirectionsStyle.directions}>
      <header className={LessonDirectionsStyle.header}>
        <h2>How to Use</h2>
        <button
          className={LessonDirectionsStyle.button}
          type="button"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <div className={LessonDirectionsStyle.content}>
        <div className={LessonDirectionsStyle.contentText}>
          <p className={LessonDirectionsStyle.introDirections}>You can listen to either the whole conversation or you can practice speaking by saying the interviewee's part.  Select your choice below.  There are also example sentence patterns below that you can use in your interview.</p>
          <h3 className={LessonDirectionsStyle.recommended}>Recommended</h3>
          <ol className={LessonDirectionsStyle.steps}>
            <li>Listen to the whole conversation.  Make sure you understand most of the English used.</li>
            <li>Practice speaking by saying the interviewee's part.</li>
            <li>Practice speaking until you are able to say the interviewee's part smoothly.  It is okay if you cannot say everything perfectly.  If you keep practicing, speaking English will become a lot easier for you.</li>
          </ol>
        </div>
      </div>}
    </article>
  );
};

export default LessonDirections;




  
