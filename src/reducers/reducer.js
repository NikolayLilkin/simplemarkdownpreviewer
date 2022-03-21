const initialState = {
    toggleFirstcontainer: false,
    toggleSecondcontainer: false
}
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case "toggleFirstcontainer":
            return {
                toggleFirstcontainer: true,
                toggleSecondcontainer: false
            };
        case "toggleSecondcontainer":
            return {
                toggleFirstcontainer: false,
                toggleSecondcontainer: true
            };
        case "toggleUp":
            return {
                toggleFirstcontainer: false,
                toggleSecondcontainer: false
            };       
        default:
            return state;
    }
}
export default reducer;