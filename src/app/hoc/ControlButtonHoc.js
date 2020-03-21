import React from "react";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    DataArrey: state.Data,
    season: state.movieChose1.season,
    movie: state.movieChose1.movie,
})

export const ControlButtonHoc = (Component) => {
  class ComponentBtn extends React.Component {
      funcControlButtonName = (type, contentType, additionalCount ) => {
        let Content = this.props.DataArrey.Data.filter(item => item.movie === this.props.movie)
        let ContentSeasons = Content.filter(item => item.season === this.props.season)
        let ContentTypes = ContentSeasons.filter(item => item[contentType])
        return ContentTypes.length  <= this.props.DataArrey.firstContent[type].length + additionalCount ?
        true : false
      }
      render(){
    return <Component {...this.props} funcControlButtonName={this.funcControlButtonName}/>
    }}
            const ControlButtonHocComponent = connect(mapStateToProps)(ComponentBtn)
            return ControlButtonHocComponent
    }


    


