import React, { Component } from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import styles from './styles/App.scss';
import Footer from "./components/Footer";
import InnovativeSection from "./components/sections/InnovativeSection";
import ProcessSection from "./components/sections/ProcessSection";
import ProjectsSection from "./components/sections/ProjectsSection";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Nav/>
        <Header/>
        <InnovativeSection/>
        <ProcessSection/>
        <ProjectsSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
