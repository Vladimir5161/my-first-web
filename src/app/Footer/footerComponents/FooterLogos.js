import React from "react";

import vikings from "../Footer.images/logo.png";
import lostfilm from "../Footer.images/lostFilm.png";
import total from "../Footer.images/total.png";

const FooterLogos = () => {
  return (
    <div className="container containerFooter">
      <div className="footerLogos">
        <a href="#" className="footerImage">
          <img src={vikings} alt="" />
        </a>
        <a href="#" className="footerImage">
          <img src={lostfilm} alt="" />
        </a>
        <a href="#" className="footerImage">
          <img src={total} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FooterLogos;
