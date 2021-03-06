import React, { Component } from 'react';
import styles from '../../styles/sections/innovative.module.scss';

import iconCase from '../../public/images/icon-case.png';
import iconComm from '../../public/images/icon-comm.png';
import iconLinked from '../../public/images/icon-linkedin.png';
import iconPerson from '../../public/images/icon-person.png';


// Innovative Content
const content = [{
    title: "Technical Background",
    desc: `A varied technical background with experience learning new technologies on the fly and adjusting
           capabilities to technical limitations and expectations of the business.`,
    icon: iconCase,
  },
  {
    title: "Communications",
    desc: `Strong communication skills with business partners and leadership. Supporting growth and
           development of both internal and external interactions`,
    icon: iconComm,
  },
  {
    title: "Networking",
    desc: `Building a network of like minded colleagues. Developing and expanding upon 
           relationships both inside and outside the workplace.`,
    icon: iconLinked,
  },
  {
    title: "Customer Oriented",
    desc: `Understanding the needs of the customer and with the ability to anticipate what
           they are asking and how that related to what is technically possible to both create
           and implement their needs.`,
    icon: iconPerson,
  }
];

class InnovativeSection extends Component {
  render() {
    return (
      <section id='services' className={[styles.section, styles.innovative].join(" ")}>

            <h2>Providing innovative solutions for new technologies.</h2>

          <p>
            With technical experience in both front and back end web technologies, business
            and database analytics reporting, and application development and ownership.
          </p>

          <div className={styles.cards}>

            {content.map((card) => (
              <div className={styles.card}>
                <div>
                <img src={card.icon} alt={card.title}/>
                <span>{card.title}</span>
                </div>
                <p>{card.desc}</p>
              </div>
            ))}

         </div>

      </section>
    );
  }
}

export default InnovativeSection;
