import React, { useEffect } from 'react';

const BottomAd = () => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client= 'ca-pub-2397909558309541'
      data-ad-slot='4064422847'
      data-ad-format= 'auto'
      data-full-width-responsive="true"
  >
  </ins>
);
};

export default BottomAd;