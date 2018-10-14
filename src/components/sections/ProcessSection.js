import React, { Component } from 'react';
import '../../styles/sections/ProcessSection.scss';

import iconDesign from '../../images/icon-gear.svg';
import iconDev from '../../images/icon-laptop.svg';
import iconStrat from '../../images/icon-globe.svg';
import iconComm from '../../images/icon-speech.svg';

import bgDesign from '../../images/astro-bg.jpg';
import bgDev from '../../images/hipster.jpg';
import bgStrat from '../../images/strategy.jpg';
import bgComm from '../../images/communication-team.jpg';

// Innovative Content
const content = [{
  title: "Design",
  desc: `Page and UI Design accounts for one of the most customer facing experiences that one might experience. 
         It can change an experience from positive or negative. It's importance as a tool can't be underestimated.`,
  icon: iconDesign,
  bg: bgStyle(bgDesign),
},
  {
    title: "Development",
    desc: `A process by which you systematically create something over a period of time. 
           Integral to a quality process or application. Strong skills in this area allow 
           for planning and organization.`,
    icon: iconDev,
    bg: bgStyle(bgDev),
  },
  {
    title: "Strategy",
    desc: `Understanding of limitations and finding ways to work through them in a 
           timely manner to both overcome the limitation and work to better define those
           limitations within the scope.`,
    icon: iconStrat,
    bg: bgStyle(bgStrat),
  },
  {
    title: "Communication",
    desc: `Working with others in a team and sharing information to better solve problems.
           A key resource to society as a whole and one of the strong components to any good 
           business relationship.`,
    icon: iconComm,
    bg: bgStyle(bgComm),
  }
];

function bgStyle(bg) {

  const style = {
    backgroundImage: `url("${bg}")`,
    backgroundSize: 'cover'
  }

  return style;
}


class ProcessSection extends Component {
  render() {
    return (
      <section id='process' className='section process'>

        {content.map((panel) => (
          <div className='panel'>
             <img src={panel.icon} alt={panel.title}/>
             <span>{panel.title}</span>
             <p>{panel.desc}</p>
            <div className='bg' style={panel.bg}/>
          </div>

        ))}

      </section>
    );
  }
}

export default ProcessSection;
