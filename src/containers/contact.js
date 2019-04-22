import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="contact-header">Contact Me</h1>
        <p className="contact-text">Want to get in touch? Send me a message and I will respond as soon as possible.</p>
        <form id="contact-form">
          <input type="hidden" name="contact_number" required />
          <label>Name*</label>
          <input type="text" name="user_name" required />
          <label>Email*</label>
          <input type="email" name="user_email" required />
          <label>Message*</label>
          <textarea name="text" required></textarea>
          <input id="contact-submit" type="submit" value="Send Message" />
        </form>
      </div>
    )
  }
}

export default Contact;