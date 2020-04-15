import React, { useState } from "react";
import { connect } from "react-redux";
import { FilterFunc } from "../../../../../store/filterReducer";

const Filter = ({ FilterFunc }) => {
    let [buttonFilter, changeButtonFilter] = useState({
        image: "buttonFilter",
        video: "buttonFilter",
        story: "buttonFilter",
        all: "buttonFilterActive",
    });
    return (
        <div className="filter">
            <ul>
                <li>
                    <div
                        className={buttonFilter.image}
                        onClick={() => {
                            FilterFunc("image");
                            changeButtonFilter({
                                image: "buttonFilterActive",
                                video: "buttonFilter",
                                story: "buttonFilter",
                                all: "buttonFilter",
                            });
                        }}
                    >
                        Photo
                    </div>
                </li>
                <li>
                    <div
                        className={buttonFilter.video}
                        onClick={() => {
                            FilterFunc("video");
                            changeButtonFilter({
                                image: "buttonFilter",
                                video: "buttonFilterActive",
                                story: "buttonFilter",
                                all: "buttonFilter",
                            });
                        }}
                    >
                        Video
                    </div>
                </li>
                <li>
                    <div
                        className={buttonFilter.story}
                        onClick={() => {
                            FilterFunc("story");
                            changeButtonFilter({
                                image: "buttonFilter",
                                video: "buttonFilter",
                                story: "buttonFilterActive",
                                all: "buttonFilter",
                            });
                        }}
                    >
                        Stories
                    </div>
                </li>
                <li>
                    <div
                        className={buttonFilter.all}
                        onClick={() => {
                            FilterFunc("all");
                            changeButtonFilter({
                                image: "buttonFilter",
                                video: "buttonFilter",
                                story: "buttonFilter",
                                all: "buttonFilterActive",
                            });
                        }}
                    >
                        All
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default connect(null, { FilterFunc })(Filter);
