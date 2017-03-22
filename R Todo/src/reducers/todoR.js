
const reducerR = (state = {
    name: '',
    id: 0
}, action) => {
    switch (action.type) {
        case "ADD":
            state =
                [
                    ...state, state.name = action.text,
                    state.id = action.id
                ]

            break;
        default:
    }
    return state;
}

export default reducerR