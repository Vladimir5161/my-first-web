import React from "react";




export const ControlButtonHoc = (Component) => {
  class ComponentBtn extends React.Component {
    getContentType = (contentType, movie, season, DataArrey) => {    
      let Content = DataArrey.Data.filter(item => item.movie === movie)
      let ContentSeasons = Content.filter(item => item.season === season)
      let ContentTypes = ContentSeasons.filter(item => item[contentType]) //a type of content(image,story or video) for filter
      return ContentTypes //an arrey of filtered by season, movie and type, content
    }
      funcControlButtonName = (type, contentType, additionalCount ) => {
        let ContentTypes = this.getContentType(contentType, this.props.movie, this.props.season, this.props.DataArrey)
        if((ContentTypes.length  <= this.props.DataArrey.firstContent[type].length + additionalCount) && (ContentTypes.length  !== this.props.DataArrey.firstContent[type].length)) {
          debugger
          return true
        }  else {
          return false
        }}
      render(){
    return <Component {...this.props} funcControlButtonName={this.funcControlButtonName} getContentType={this.getContentType}/>
    }}
            const ControlButtonHocComponent = ComponentBtn
            return ControlButtonHocComponent
    }


    


