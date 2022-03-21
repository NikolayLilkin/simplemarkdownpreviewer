const reducer = (state = {toggle:0},action) => {
    switch (action.type) {
        case "toggleFirstcontainer":
        return {
            toggle: 1
            };
        case "toggleSecondcontainer":
        return {
            toggle: 2
            };
        case "toggleUp":
        return {
            toggle: 0
            };       
        default:{
            return state;
        }
    }
}
export default reducer;