import React from "react";

import images from "../../../common/images.js";

const FooterLogos = () => {
  return (
    <div className="container containerFooter">
      <div className="footerLogos">
        <a href="#" className="footerImage">
          <img src={images[0].logo} alt="" />
        </a>
        <a href="#" className="footerImage">
          <img src={images[4].lostFilm} alt="" />
        </a>
        <a href="#" className="footerImage">
          <img src={images[3].got} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FooterLogos;
