import React from 'react';

import footerStyle from './footer.module.css';

const Footer = () => {
    return (
      <footer>
        <h3>
          Have a Question or See a Mistake?
          <a className="footer-a" href="mailto:support@convoenglish.co">  Contact Us</a>
        </h3>
        <h3>
          copyright&copy;{new Date().getFullYear()}
          <span> ConvoEnglish LLC </span> all rights reserved
        </h3>
        <h3>
          <a className="footer-a" href="https://convoenglish.co">More Free English Lessons</a>
        </h3>

      </footer>
    );
};

export default Footer;