import React from "react";

import "./Footer.css";
import FooterLogos from "./footerComponents/FooterLogos";
import FooterFlor from "./footerComponents/FooterFlor";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLogos />
      <div className="footerLinks"></div>
      <FooterFlor />
    </div>
  );
};

export default Footer;
