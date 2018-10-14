import React, { Component } from 'react';
import '../../styles/sections/ContactSection.scss';


class ContactSection extends Component {
  render() {
    return (
      <section id='contact' className='half-section contact'>
            <h3>Contact Me</h3>
              <p>Please let me know if you have a project you'd be interested in getting my assistance on!</p>
          <form id="contact-form" >
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" placeholder="Name" />
            <label htmlFor="contact-emai1">Email</label>
              <input type="email" id="contact-email" placeholder="Email"/>
            <label htmlFor="contact-phone">Phone</label>
              <input type="number" id="contact-phone" placeholder="Phone Number"/>
            <label htmlFor="contact-message">Message</label>
              <input type="text" id="contact-message" placeholder="Message"/>

            <button type="submit" id="contactSubmit">Submit</button>
            <span id="contact-sent" />
          </form>

      </section>
    );
  }
}

export default ContactSection;
