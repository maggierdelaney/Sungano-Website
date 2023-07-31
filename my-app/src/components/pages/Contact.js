import React from 'react';
import './style.css';

//in <form, see where "contactform.php" was added

export default function Contact() {
  return (
    <div class="container">
        <form action="mailto:md472@nau.edu" method="get" enctype="text/plain">
          <div id="contact-font" class="form-group">
            <label id="contact-font" for="email">Email address</label>
            <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" required></input>
          </div>
          <div id="contact-font" class="form-group">
            <label id="contact-font" for="message">Message</label>
            <textarea name="message" class="form-control" id="message" rows="3" required></textarea>
          </div>
          <button id="contact-font" type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  );
}
