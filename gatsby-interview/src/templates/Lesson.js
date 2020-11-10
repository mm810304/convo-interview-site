import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Dialogue from '../components/Dialogue';
import Player from '../components/Player';
import LessonDirections from '../components/LessonDirections';
import Patterns from '../components/Patterns';

import lessonStyle from './lesson.module.css';

const Lesson = ({ data: { lesson } }) => {
    const [audio, setAudio] = useState(lesson.full_audio.asset.url);
    const [autoPlay, setAutoPlay] = useState(false);
    const [fullAudioChecked, setFullAudioChecked] = useState(true);
    const [partAudioChecked, setPartAudioChecked] = useState(false);

    const handleAudioChange = (e) => {
      const audioFile = e.target.value;
      
      if (audioFile === 'full') {
        setAudio(lesson.full_audio.asset.url);
        setPartAudioChecked(false);
        setFullAudioChecked(true);
        setAutoPlay(true);
      } else if (audioFile === 'part') {
        setAudio(lesson.part_audio.asset.url);
        setPartAudioChecked(true);
        setFullAudioChecked(false);
        setAutoPlay(true);
      }
    };

    return (
        <Layout>
          <div className={lessonStyle.wrapper}>
            <h1 className={lessonStyle.title}>{lesson.title}</h1>
            <LessonDirections />
            <Img 
              fluid={lesson.image.image.asset.fluid}
              alt={lesson.image.image_description}
              className={lessonStyle.image}
            />
            <Player 
              audioFile={audio}
              style={{ width: '80%' }}
              autoPlayState={autoPlay}
            />
            <div className={lessonStyle.audioChoiceWrapper}>
                <div className={lessonStyle.audioChoice}>
                  <input className={lessonStyle.hiddenRadio} type="radio" id="full-audio" name="audio" value="full" checked={fullAudioChecked} onChange={handleAudioChange} />
                  <label className={lessonStyle.audioChoiceLabel} for="full-audio">Listen to Full Conversation</label>
                </div>
                <div className={lessonStyle.audioChoice}>
                  <input className={lessonStyle.hiddenRadio} type="radio" id="part-audio" name="audio" value="part" checked={partAudioChecked} onChange={handleAudioChange} />
                  <label className={lessonStyle.audioChoiceLabel} for="part-audio">Say Interviewee's Part</label>
                </div>
            </div> 
            <section className={lessonStyle.dialogueContainer}>
              <Dialogue dialogue={lesson.dialogue} />
            </section>
            <section className={lessonStyle.patternContainer}>
              <Patterns patterns={lesson.patterns} />
            </section>
          </div>
        </Layout>
    );
};

export const query = graphql`
  query($lessonId: String) {
    lesson: sanityLessons(id: {eq: $lessonId}) {
      title
      dialogue
      patterns
      image {
        image_description
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      full_audio {
        asset {
          title
          url
          source {
            id
            name
            url
          }
        }
      }
      part_audio {
        asset {
          title
          url
          source {
            id
            name
            url
          }
        }
      }
    }
  }
`;

export default Lesson;