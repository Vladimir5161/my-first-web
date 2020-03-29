import React from "react";
import "./News.css";
import NewsListItem from "./NewsListItem";
import { connect } from "react-redux";
import { getNews } from "../../../../store/newsDataReducer";
import Preloader from "../../Preloader/Preloader";

class NewsList extends React.Component {
    componentDidMount() {
        this.props.getNews();
    }

    render() {
        let { newsData } = this.props;
        if (newsData.length === 0) {
            return <Preloader />;
        }
        return (
            <div className="containerMain">
                <h1 className="h1">News</h1>
                {newsData.map(
                    ({ newsImage, newsText, id, newsName, data, time }) => (
                        <div key={id}>
                            <NewsListItem
                                newsImage={newsImage}
                                newsText={newsText}
                                newsName={newsName}
                                data={data}
                                time={time}
                                id={id}
                            />
                        </div>
                    )
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newsData: state.newsData.NewsData
});

export default connect(mapStateToProps, { getNews })(NewsList);
