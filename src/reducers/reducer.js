const reducer = (state = {toggle: 0,first: true,second: true},action) => {
    switch (action.type) {
        case "toggleFirstcontainer":
        return {
            toggle: 1,
            first: true,
            second: false
            };
        case "toggleSecondcontainer":
        return {
            toggle: 2,
            first: false,
            second: true
            };
        case "toggleUp":
        return {
            toggle: 0,
            first: true,
            second: true
            };       
        default:{
            return state;
        }
    }
}
export default reducer;