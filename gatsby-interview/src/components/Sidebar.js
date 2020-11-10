import React from 'react';
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import cx from 'classnames';

import { linkData } from '../constants/Links';

import sidebarStyles from './sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={cx(
      sidebarStyles.sidebar,
      {
        [sidebarStyles.showSidebar]: isOpen
      }
    )}>
      <button type="button" className={sidebarStyles.closeButton} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className={sidebarStyles.linkContainer}>
        <ul>
          {linkData.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;