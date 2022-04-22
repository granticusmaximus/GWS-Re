import React from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from 'react-bootstrap';


export default function Contact() {
  const notify = () => toast.success("Email has been sent!");
  const nodFunct = async () => {
    await notify(5000);
    console.log("Reloading Page with interesting features, please hold");
    window.location.reload(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_libv1nq', 'template_qbxfxzc', e.target, 'QUnmkZs8gBchyu6ck', e)
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
        <Container>
          <div className='card'>
            <h1>Contact Form</h1>
            <p>
              Use the form below to share your questions, ideas, comments and feedback
            </p>
            <form id="contact-form" role="form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="from_name"
                      className="form-control"
                      placeholder="Please enter your first and last name *"
                      required="required"
                      data-error="Name is required."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Please enter your email *"
                      required="required"
                      data-error="Valid email is required."
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <textarea
                    id="form_message"
                    name="message"
                    className="form-control"
                    placeholder="Write your message here."
                    rows="6" required="required"
                    data-error="Please, leave us a message.">
                  </textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="submit"
                    className="btn btn-success btn-send pt-2 btn-block "
                    onClick={nodFunct}
                    value="Send Message" />
                </div>
              </div>

            </form>
          </div>
        </Container>
      </center>
      <ToastContainer />
    </div>
  );
}