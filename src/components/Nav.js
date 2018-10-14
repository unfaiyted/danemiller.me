import React, { Component } from 'react';
import '../styles/Nav.scss';
import logo from '../images/logo.png'
import { capitalizeFirstLetter as capFirst } from '../util/helper';

const sections = [
  'home','services','process','work','contact'
];


class Nav extends Component {
  render() {
    return (
        <nav id="header-nav" className='nav'>
          <img src={logo} alt='Logo'/>
          <span className='title'>Dane Miller</span>
            <ul className='right'>
              {sections.map((item) => (
                <li key={item}><a href={`#${item}`}>{capFirst(item)}</a></li>
              ))}
            </ul>
        </nav>
    );
  }
}

export default Nav;
