const initialState = {
    alertClass: "windowNo",
    sliderClass: "sliderClass",
    ButtonClose: "ButtonCloseImage-clicked",
    clicked: false,
};

const someReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONSLIDERCLOSE":
            return {
                ...state,
                sliderClass: (state.sliderClass = "sliderClassNo"),
                ButtonClose: (state.ButtonCloseImage_clicked =
                    "ButtonOpenSlider"),
                clicked: (state.clicked = true),
            };
        case "ONSLIDEROPEN":
            return {
                ...state,
                sliderClass: (state.sliderClass = "sliderClass"),
                ButtonClose: (state.ButtonCloseImage_clicked =
                    "ButtonCloseImage-clicked"),
                clicked: (state.clicked = false),
            };
        default:
            return state;
    }
};
export const OnSliderClose = () => ({ type: "ONSLIDERCLOSE" });
export const OnSliderOpen = () => ({ type: "ONSLIDEROPEN" });

export default someReducer;
