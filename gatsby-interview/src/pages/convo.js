import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { resourceData } from '../constants/Resources';

import Layout from '../components/Layout';

import resourceStyles from './convo.module.css';

const Convo = () => {
  return (
    <Layout>
      <div className={resourceStyles.wrapper}>
        <h1 className={resourceStyles.title}>Free English Resources For Everything</h1>
        {
          resourceData.map((resource) => {
            return (
              <OutboundLink href={resource.url} target="_blank" rel="noreferrer"><div key={resource.id} className={resourceStyles.resource}>
                <h2>{resource.text}</h2>
                <p>{resource.description}</p>
              </div></OutboundLink>
            )
          })
        }
      </div>
    </Layout>
  )
};

export default Convo;