import React from "react";
import { keys } from "lodash";
import LikedContentPageItem from "./LikedContentPageItem";
import { connect } from "react-redux";
import "./LikedContent.css";
import { getContentMap } from "../../../../store/DataReducer";

const LikedContentPage = ({
    likedContentItems,
    DataArrey,
    contentMapVikings = getContentMap(DataArrey),
}) => {
    return (
        <div>
            <h1 className="h1">Liked Content</h1>
            <div className="likedContentPage">
                {keys(likedContentItems).map((contentId) => (
                    <div className="contentLikedArea" key={contentId}>
                        <LikedContentPageItem
                            contentId={contentId}
                            product={contentMapVikings[contentId]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    likedContentItems: store.likedContentItems.likedContentIdArrey,
    DataArrey: store.Data.Data,
});
// const mapDispatchToProps = dispatch => ({
//   getContentMap: (arrey) =>dispatch({
//     type: "GETCONTENTMAP",
//     arrey: arrey,
//   })
// })

export default connect(mapStateToProps)(LikedContentPage);
