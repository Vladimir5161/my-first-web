import React from "react";

import logo from "../../../common/images/logo.png";
import lostfilm from "../../../common/images/lostFilm.png";
import total from "../../../common/images/total.png";

const FooterLogos = () => {
  return (
    <div className="container containerFooter">
      <div className="footerLogos">
        <a href="#" className="footerImage">
          <img src={logo} alt="" />
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
