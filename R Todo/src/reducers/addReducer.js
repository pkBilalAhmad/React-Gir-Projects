const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
           return [
               ...state,
               {
                   text:action.text
               }
           ] 
            break;
        default:

    }
    return state;
}

export default reducer