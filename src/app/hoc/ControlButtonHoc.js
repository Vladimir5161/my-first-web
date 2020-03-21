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
        if((ContentTypes.length  <= this.props.DataArrey.firstContent[type].length + additionalCount) && (ContentTypes.length  !== this.props.DataArrey.firstContent[type].length)) {
          debugger
          return true
        }  else {
          return false
        }}
      render(){
    return <Component {...this.props} funcControlButtonName={this.funcControlButtonName}/>
    }}
            const ControlButtonHocComponent = connect(mapStateToProps)(ComponentBtn)
            return ControlButtonHocComponent
    }


    


