import React from "react";

import "../Footer.css";

const FooterFlor = () => {
    return (
        <div className="FooterFlor" id="info">
            <div className="containerFooter">
                <div className="FooterFlorGrid">
                    <div className="florBlock">
                        <div className="link">
                            Copyright © 2019
                            <button>
                                <span>Vikings</span>
                            </button>
                        </div>
                        <div className="link">
                            <button>Privat Policy</button>
                        </div>
                        <div className="link">
                            <button>FAQ</button>
                        </div>
                        <div className="link">
                            <button>Support</button>
                        </div>
                    </div>
                    <div className="florBlock">
                        <div className="link">
                            Designed by
                            <button>
                                <span>Vladimir Vagaev</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterFlor;
