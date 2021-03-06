import React, { Component } from 'react';
import styles from  '../../styles/sections/project.module.scss';
import Laptop from "../../containers/Laptop";

// Projects Content
const content = [{
  title: "Eggs Benedict",
  desc: `Tool to track metabolic rate and calculate projected weight loss over time using the Harris Benedict Equation.
         Uses Java Spring Framework, JQuery, MeteorJS backend`,
  github: "https://github.com/unfaiyted/eggs-benedict",
  img:  bgStyle("/images/fitness.jpg"),
  imgMini:  "/images/eggs-benedict.png"
},
  {
    title: "Pennywise",
    desc: `Financial tracker to help users manage and track bills and create various financial estimations.
           Uses Java Spring Framework, JQuery, Node`,
    github: "https://github.com/unfaiyted/pennywise",
    img:   bgStyle("/images/finance-dark.jpg"),
    imgMini: "/images/pennywise.jpg"
  },
  {
    title: "XIV Gear Manager",
    desc: `Gear planning application to help gamers determine the proper order of gearing.
            Uses Java Spring Framework, JQuery, Node, Selenium Web Driver, Multiple external APIs`,
    github: "https://github.com/unfaiyted/xiv-gear-planner",
    img: bgStyle("/images/ffxiv-smaller.jpg"),
    imgMini: "/images/xiv-gear-planner.jpg"

  },
  {
    title: "miniMovieDB",
    desc: `Movie database to view and import movies to store in a sortable list with movie data included.
          Uses Node JSON Server, theMovieDB API`,
    github: "https://github.com/unfaiyted/movies-application",
    img: bgStyle("/images/movies.jpg"),
    imgMini: "/images/mini-movies.png"
  }
];

function bgStyle(bg) {

  const style = {
    backgroundImage: `url("${bg}")`,
    backgroundSize: 'cover'
  }

  return style;
}




class ProjectsSection extends Component {

  componentWillMount() {
    this.setState({
      project: content[0],
      current: 0,
      max: content.length,
    })
  }
  // next project
  next = () => {

    const {current, max} = this.state;

    const change = (current+1 >= max) ? 0 : current+1;

    this.setState({
      project: content[change],
      current: change,
    });

  };

  //prev project
  prev = () => {
    const {current, max} = this.state;

    const change = (current-1 === -1) ? max-1 : current-1;

    this.setState({
      project: content[change],
      current: change,
    });


  };

  render() {
   const {project} = this.state;
    return (
      <section id='work' className={[styles.section, styles.projects].join(" ")}>

            <div className={styles.project}>
                 <Laptop img={project.imgMini} alt={project.title} />
               <div className={styles.info}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <a href={project.github}>View on GitHub</a>
              </div>
            </div>

        <div style={project.img} className={styles.bgImg}/>
          <button onClick={this.prev}>Prev</button> <button onClick={this.next}>Next</button>
      </section>
    );
  }
}

export default ProjectsSection;
