import React from "react";

import images from "../../../common/images.js";

const FooterLogos = () => {
    return (
        <div className="containerFooter">
            <div className="footerLogos">
                <div className="footerImage">
                    <img src={images[0].logo} alt="" />
                </div>
                <div className="footerImage">
                    <img src={images[4].lostFilm} alt="" />
                </div>
                <div className="footerImage">
                    <img src={images[3].got} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FooterLogos;
