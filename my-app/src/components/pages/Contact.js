import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div class="container">
        <form method="post">
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
