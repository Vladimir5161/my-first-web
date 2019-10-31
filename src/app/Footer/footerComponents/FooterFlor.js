import React from "react";

import "../Footer.css";

const FooterFlor = () => {
  return (
    <div className="FooterFlor">
      <div className="container containerFooter">
        <div className="FooterFlorGrid">
          <div className="florBlock">
            <div className="link">
              Copyright © 2019
              <a href="#">
                <span>Vikings</span>
              </a>
            </div>
            <div className="link">
              <a href="">Privat Policy</a>
            </div>
            <div className="link">
              <a href="">FAQ</a>
            </div>
            <div className="link">
              <a href="">Support</a>
            </div>
          </div>
          <div className="florBlock">
            <div className="link">
              Designed by
              <a href="#">
                <span>Vladimir Vagaev</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFlor;
