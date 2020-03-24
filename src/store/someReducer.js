const initialState = {
    alertClass: "windowNo",
    sliderClass: "sliderClass",
    ButtonClose: "ButtonCloseImage-clicked",
    clicked: false,
}

const someReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ONRULESCLICK": 
            return {
                ...state,
                alertClass: state.alertClass = "window"
            }
            case "ONRULESDECLICK": 
                return {
                ...state,
                alertClass: state.alertClass = "windowNo"
            }
            case "ONSLIDERCLOSE":
                return {
                    ...state,
                    sliderClass: state.sliderClass = "sliderClassNo",
                    ButtonClose: state.ButtonCloseImage_clicked = "ButtonOpenSlider",
                    clicked: state.clicked = true,
                }
            case "ONSLIDEROPEN":
                 return {
                     ...state,
                    sliderClass: state.sliderClass = "sliderClass",
                    ButtonClose: state.ButtonCloseImage_clicked = "ButtonCloseImage-clicked",
                    clicked: state.clicked = false,
                }
        default: 
            return state;
}}

export default someReducer