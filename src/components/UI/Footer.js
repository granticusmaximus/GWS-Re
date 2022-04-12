import React, { useState } from "react";
import logo from '../../assets/img/logo.png'
const Footer = () => {
  const [moreText] = useState(false);
  return (
    <div class="footer">info@grantwatson.dev</div>
  );
};

export default Footer;
