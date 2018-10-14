import React, { Component } from 'react';
import '../styles/Footer.scss';
import {capitalizeFirstLetter as capFirst} from "../util/helper";


import imgLocation from '../images/map-marker-alt-solid.svg';
import imgPhone from '../images/mobile-alt-solid.svg';
import imgMail from '../images/envelope-solid.svg';

import imgGitHub from '../images/github-brands.svg';
import imgLinkedIn from '../images/linkedin-in-brands.svg';
import imgReddit from '../images/reddit-alien-brands.svg';



const sections = [
  'home','services','process','work','contact'
];

const contact = [
  {
    icon: imgLocation,
    desc: 'San Antonio, Texas',
    link: '#'
  },
  {
    icon: imgPhone,
    desc: '+1 208 352-0195',
    link: '#'
  },
  {
    icon: imgMail,
    desc: 'miller.l.dane@gmail.com',
    link: 'mailto:miller.l.dane@gmail.com'
  }
]


class Footer extends Component {
  render() {
    return (
      <footer className='footer'>


        <div className='farm'>
          <h3>Dane L Miller</h3>
          <ul className='right'>
            {sections.map((item) => (
              <li key={item}>
                <a href={`#${item}`} >{capFirst(item)}</a>
              </li>
            ))}
          </ul>
          <span className='muted'>&copy; Dane L Miller. All rights reserved.</span>
       </div>

          <div className='personal'>
            {contact.map((item) => (

              <div>
              <img src={item.icon} alt='icon' />
              <span>
                {item.desc}
              </span>
            </div>

            ))}
          </div>

          <div className='outside'>
            <p>A little bit more...</p>

            <span className='muted'>If you'd like to see more projects I have been involved with or find out more
            check out these websites</span>

            <div>
                <a href="http://github.com/unfaiyted">
                  <img src={imgGitHub} alt='icon' />
                </a>
                 <a href="http://linkedin.com/in/danelmiller">
                   <img src={imgLinkedIn} alt='icon' />
                 </a>
               <a href="https://www.reddit.com/user/unfaiyted">
                 <img src={imgReddit} alt='icon' />
               </a>
            </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
