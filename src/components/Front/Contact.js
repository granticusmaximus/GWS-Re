import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Col } from 'react-bootstrap';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_libv1nq', 'template_qbxfxzc', e.target, 'QUnmkZs8gBchyu6ck')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
      <br />
      <br />
      <hr />
      <center>
        <div className='card'>
        <h1>Contact Form</h1>
        <p>
          Use the form below to share your questions, ideas, comments and feedback
        </p>
        <form id="contact-form" role="form" onSubmit={sendEmail}>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <input id="form_name" type="text" name="from_name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
              </div>
              <div class="form-group">
                <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-md-12">
              <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> 
            </div>
          </div>
          <br />
          <div class="col-md-12">
              <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Send Message"/>
            </div>
        </form>
        </div>
      </center>
    </div>
  );
}