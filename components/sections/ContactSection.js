import React, { Component } from 'react';
import styles from '../../styles/sections/contact.module.scss';



const Item = ({id, label, type="text", placeholder = label}) => {


  return (
    <div className={styles.formItem}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id}  />
    </div>
  )
}



const contactSection = () => {
    return (
      <section id='contact' className={[styles.halfSection, styles.contact].join(" ")} >
            <h3>Contact Me</h3>
              <p>Please fill in your contact info below and I'll be in contact with you soon.</p>
          <form id="contact-form" >

            <div className={styles.formContainer}>
              <Item id="contact-name" label="Name"  />
              <Item id="contact-email" label="Email"  />
              <Item id="contact-phone" label="Phone" placeholder="Phone Number"/>
              <Item id="contact-message" label="Message"  />
            </div>


            <button type="submit" id="contactSubmit">Submit</button>
            <span id="contact-sent" />
          </form>
      </section>
    );
}

export default contactSection;
