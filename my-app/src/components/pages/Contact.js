import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div class="container">
        <form>
          <div id="contact-font" class="form-group">
            <label id="contact-font" for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <div id="contact-font" class="form-group">
            <label id="contact-font" for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button id="contact-font" type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  );
}
