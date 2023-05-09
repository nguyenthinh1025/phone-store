


const stateDefault = {
    arrPhone: [],
    phoneByID: {}
}


export const phoneReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_PHONE': {
            state.arrPhone = action.arrPhone

            return { ...state }
        }
        case 'GET_BY_ID': {
            state.phoneByID = action.phoneByID

            return { ...state }
        }
        case 'GET_BY_IDTYPE': {
            state.arrPhone = action.arrPhone

            return { ...state }
        }

        default: return state;
    }
}