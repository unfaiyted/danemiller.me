import React, { Component } from 'react';
import styles from '../styles/footer.module.scss';
import {capitalizeFirstLetter as capFirst} from "../util/helper";

import Image from "next/image";

const sections = [
  'home','services','process','work','contact'
];

const contact = [
  {
    icon: "/images/map-marker-alt-solid.svg",
    desc: 'San Antonio, Texas',
    link: '#'
  },
  {
    icon: "/images/mobile-alt-solid.svg",
    desc: '+1 208 352-0195',
    link: '#'
  },
  {
    icon: "/images/envelope-solid.svg",
    desc: 'miller.l.dane@gmail.com',
    link: 'mailto:miller.l.dane@gmail.com'
  }
]


class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>


        <div className={styles.farm}>
          <h3>Dane L Miller</h3>
          <ul className={styles.list}>
            {sections.map((item) => (
              <li key={item}>
                <a href={`#${item}`} >{capFirst(item)}</a>
              </li>
            ))}
          </ul>
          <span className={styles.muted}>&copy; Dane L Miller. All rights reserved.</span>
       </div>

          <div className={styles.personal}>
            {contact.map((item) => (

              <div>
                <img className={styles.personalIcon} src={item.icon} alt="icon"/>
              <span className={styles.personalText}>
                {item.desc}
              </span>
            </div>

            ))}
          </div>

          <div className={styles.outside}>
            <p>A little bit more...</p>

            <span className={styles.muted}>If you'd like to see more projects I have been involved with or find out more
            check out these websites</span>

            <div className={styles.websiteIcons}>
                <a href="http://github.com/unfaiyted">
                  <img src="/images/github-brands.svg" alt="icon"/>

                </a>
                 <a href="http://linkedin.com/in/danelmiller">
                   <img src="/images/linkedin-in-brands.svg" alt="icon"/>
                 </a>
               <a href="https://www.reddit.com/user/unfaiyted">
                 <img src="/images/reddit-alien-brands.svg" alt="icon"/>
               </a>
            </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
