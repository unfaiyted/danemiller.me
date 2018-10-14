import React, { Component } from 'react';
import '../styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <header id='home' className='header'>
              <h1>Problems need solutions.</h1>
              <div>
                Motivated  &#9679; Adaptable &#9679; Inventive
              </div>
               <div>
                  <a href="http://linkedin.com/in/danelmiller">LinkedIn</a>
                  <a href="/resume.pdf">Resume</a>
               </div>
      </header>
    );
  }
}

export default Header;
