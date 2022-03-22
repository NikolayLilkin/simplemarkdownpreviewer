const reducer = (state = {toggle: 0,first: true,second: true, text:"# Welcome to my React Markdown Previewer!"},action) => {
    switch (action.type) {
        case "toggleFirstcontainer":
            return {
                toggle: 1,
                first: true,
                second: false,
                text: state.text
            };
        case "toggleSecondcontainer":
            return {
                toggle: 2,
                first: false,
                second: true,
                text: state.text
            };
        case "toggleUp":
            return {
                toggle: 0,
                first: true,
                second: true,
                text: state.text
            };
        case "addText":
            return{
                toggle: state.toggle,
                first:state.first,
                second:state.second,
                text: action.payload
            }           
        default:{
            return state;
        }
    }
}
export default reducer;