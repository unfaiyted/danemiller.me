import Head from 'next/head'
import styles from '../styles/home.module.css'
import Layout from "../components/layout";
import React from "react";


import InnovativeSection from "../components/sections/InnovativeSection";
import ProcessSection from "../components/sections/ProcessSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";


export default function Home() {
  return (

    <Layout home>
      <div className={styles.container}>
        <InnovativeSection/>
        <ProcessSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
    </Layout>
  )
}
