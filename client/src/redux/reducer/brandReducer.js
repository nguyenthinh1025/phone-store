


const stateDefault = {
    arrType: []
}


export const brandReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_TYPE': {
            state.arrType = action.arrType

            return { ...state }
        }


        default: return state;
    }
}