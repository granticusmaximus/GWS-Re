import React, { useState } from "react";
import logo from '../../assets/img/logo.png'
const Footer = () => {
  const [moreText] = useState(false);
  return (
      <footer className="footer--pin">
        <img src={logo} alt="image description" height={75} width={75}/>
        <p><em>Email:</em> info@grantwatson.dev</p>
        <p><em>Cell Phone:</em> 478-733-5239</p>
      </footer>
  );
};

export default Footer;
