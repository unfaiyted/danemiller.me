import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'
import Nav from "./nav";
import React from "react";

export const siteTitle = 'Dane Miller.dev'

export default function Layout ({ children, home }) {
  return (
    <div className={styles.container}>

      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Nav/>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>

      {/*{!home && (*/}
      {/*  <div className={styles.backToHome}>*/}
      {/*    <Link href="/">*/}
      {/*      <a>← Back to home</a>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*)}*/}

      <Footer/>

    </div>
  )
}
