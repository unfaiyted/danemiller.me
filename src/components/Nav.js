import React, { Component } from 'react';
import '../styles/Nav.scss';
import logo from '../images/logo.png'
import { capitalizeFirstLetter as capFirst, isOnScreen} from '../util/helper';

const sections = [
  'home','services','process','work','contact'
];

class Nav extends Component {

  componentWillMount() {
    this.setState({
      sticky: false,
      current: 'home',
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {

    let screenPos = window.scrollY;

    let currentSection = sections.filter(section => {
      const element = document.getElementById(section);

      return (isOnScreen(element));
    });

    this.setState({
      sticky: (screenPos > 20),
      current: currentSection[0]
    })

  };

  scrollTo = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href').replace('#','');
    const element = document.getElementById(target);

    if(element) {

      window.scroll({
        top: element.offsetTop - 60,
      left: 0,
    behavior: "smooth"})
    }

  };


  render() {

    const { sticky, current} = this.state;

    return (
        <nav id="header-nav" className={(sticky) ? 'nav sticky' : 'nav'}>
          <img src={logo} alt='Logo'/>
          <span className='title'>Dane Miller</span>
            <ul className='right'>
              {sections.map((item) => (
                <li key={item} className={(current === item) ? 'active': null}>
                  <a href={`#${item}`} onClick={this.scrollTo}>{capFirst(item)}</a>
                </li>
              ))}
            </ul>
        </nav>
    );
  }
}

export default Nav;
