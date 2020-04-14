import React from "react";
import { connect } from "react-redux";
import { FilterFunc } from "../../../../../store/filterReducer";

const Filter = ({ FilterFunc }) => {
    return (
        <div className="filter">
            <ul>
                <li>
                    <div
                        className="buttonFilter"
                        onClick={() => {
                            FilterFunc("image");
                        }}
                    >
                        Photo
                    </div>
                </li>
                <li>
                    <div
                        className="buttonFilter"
                        onClick={() => {
                            FilterFunc("video");
                        }}
                    >
                        Video
                    </div>
                </li>
                <li>
                    <div
                        className="buttonFilter"
                        onClick={() => {
                            FilterFunc("story");
                        }}
                    >
                        Stories
                    </div>
                </li>
                <li>
                    <div
                        className="buttonFilter"
                        onClick={() => {
                            FilterFunc("all");
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
