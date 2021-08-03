import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('Home');


    const renderPage = () => {
        switch (currentPage) {
          case 'About':
            return <About />;
          case 'Projects':
            return <Projects />;
          case 'Contact':
            return <Contact />;
          default:
            return <Home />;
        }
      };
    
      return (
        <>
          <NavTabs currentPage={currentPage} 
          handlePageChange={handlePageChange}
          ></NavTabs>
          <main>
            {renderPage(currentPage)}
          </main>
          {/* <footer>
          <div className="footer-text-container">
                <p className="footer_text justify-content-center">Copyright &amp; Design © Rebecca Nguyen 2021</p>
          </div>
          </footer> */}
        </>
      );
}

export default App;
