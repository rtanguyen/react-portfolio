import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'About', 'Projects', 'Contact'];


  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{border: 'none'}}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {tabs.map(tab => (
                  <li className="nav-item" aria-current="page" key={tab}>
                    <a
                      href={'#' + tab.toLowerCase()}
                      // Whenever a tab is clicked on,
                      // the current page is set through the handlePageChange props.
                      onClick={() => props.handlePageChange(tab)}
                      className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                      }
                    >
                      {tab}
                    </a>
                  </li>
                ))}
              </ul>
                  {/* <li className="nav-item"><a className="nav-link active" aria-current="page" href="index.html">home</a></li>
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="about.html">about</a></li>
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="work.html">projects</a></li>
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="contact.html">contact</a></li> */}
            </div>
          </div>
        </nav>
      </header>


  );
}

export default NavTabs;
