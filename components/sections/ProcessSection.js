import React, { Component } from 'react';
import styles from '../../styles/sections/process.module.scss';

import iconDesign from '../../public/images/icon-gear.svg';
import iconDev from '../../public/images/icon-laptop.svg';
import iconStrat from '../../public/images/icon-globe.svg';
import iconComm from '../../public/images/icon-speech.svg';

import bgDesign from '../../public/images/astro-bg.jpg';
import bgDev from '../../public/images/hipster.jpg';
import bgStrat from '../../public/images/strategy.jpg';
import bgComm from '../../public/images/communication-team.jpg';

// Innovative Content
const content = [{
  title: "Design",
  desc: `Page and UI Design accounts for one of the most customer facing experiences that one might experience. 
         It can change an experience from positive or negative. It's importance as a tool can't be underestimated.`,
  icon: iconDesign,
  bg: bgStyle("/images/astro-bg.jpg"),
},
  {
    title: "Development",
    desc: `A process by which you systematically create something over a period of time. 
           Integral to a quality process or application. Strong skills in this area allow 
           for planning and organization.`,
    icon: iconDev,
    bg: bgStyle("/images/hipster.jpg"),
  },
  {
    title: "Strategy",
    desc: `Understanding of limitations and finding ways to work through them in a 
           timely manner to both overcome the limitation and work to better define those
           limitations within the scope.`,
    icon: iconStrat,
    bg: bgStyle("/images/strategy.jpg"),
  },
  {
    title: "Communication",
    desc: `Working with others in a team and sharing information to better solve problems.
           A key resource to society as a whole and one of the strong components to any good 
           business relationship.`,
    icon: iconComm,
    bg: bgStyle("/images/communication-team.jpg"),
  }
];

function bgStyle(bg) {

  const style = {
    backgroundImage: `url("${bg}")`,
    backgroundSize: 'cover'
  };

  return style;
}


const processSection  = () => {

    return (
      <section id='process' className={[styles.section, styles.process].join(" ")}>

        {content.map((panel) => (
          <div className={styles.panel}>
             <img src={panel.icon} alt={panel.title}/>
             <span>{panel.title}</span>
             <p>{panel.desc}</p>
            <div className={styles.bg} style={panel.bg}/>
          </div>

        ))}

      </section>
    );
}


export default processSection;
