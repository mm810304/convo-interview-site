import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import 'normalize.css';
import '../styles/index.css';
import layoutStyles from './layout.module.css';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={layoutStyles.container}>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;