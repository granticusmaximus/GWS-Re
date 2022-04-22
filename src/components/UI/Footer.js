import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="finner">
        <div className="row">
          <div className="col-sm-4">
            <p>
              <strong>
                Contact & Connect with Me
              </strong>
            </p>
            <p>
              (478) 733-5239
            </p>
            <p>
              info@grantwatson.dev
            </p>
              
           
          </div>
          <div className="col-sm-4">
            <center>
              <p>
                <a href='/contact' className="btn btn-outline-primary" rel="noreferrer" target="_blank">Send Me an Email</a>
              </p>
              <p>
                <a href="https://twitter.com/granticusdev" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="https://github.com/granticusmaximus" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://www.facebook.com/GWSoftware" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.linkedin.com/in/grantwatsonfullstack/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
              </p>
            </center>
          </div>
          <div className="col-sm-4">
            <div className="fin-float">
              <p>© 2020 Grant Watson</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
