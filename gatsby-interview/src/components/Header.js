import React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import { linkData } from '../constants/Links';

import headerStyles from './header.module.css';


const Header = ({ toggleSidebar }) => {
  return (
    <header className={headerStyles.navbar}>
      <div className={headerStyles.navCenter}>
        <div className={headerStyles.navHeader}>
        <Link to="/"><h2 className={headerStyles.logo}>Convo</h2></Link>
          <button type="button" onClick={toggleSidebar} aria-label="Dropdown Menu">
            <FaAlignRight></FaAlignRight>
          </button>
          <ul className={headerStyles.pageLinks}>
            {linkData.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            )})}
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;