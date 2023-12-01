import React, { useState } from 'react';
import './navibar.css';

const Navibar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ backgroundColor: 'grey' }}>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
            <div className="navbar-nav text-start text-md-center right" style={{ width: '100%'}}>
              <a className="nav-link" aria-current="page" style={{ color:'black', alignItems: 'start' }} href="/">Login</a>
            </div>
          </div>
        </div>
        </nav>
      </div>
    );
  }
  
  export default Navibar;
  