import React from 'react';
import AdSense from 'react-adsense'

const BottomAd = () => {
  return (
    <div align="center">
      <AdSense.Google 
        client="ca-pub-2397909558309541"
        slot="4064422847"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
};

export default BottomAd;