

let test = []
if (JSON.parse(localStorage.getItem('gh'))) {
    test = JSON.parse(localStorage.getItem('gh'))
}




const stateDefault = {
    arrOrder: test,
    history: [],
    historyDetail: []

}


export const orderReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let gh = [...state.arrOrder];
            let gh1 = { ...action.item, sl: 1 }
            let index = gh.find(item => item.id === gh1.id)
            if (index) {
                index.sl += 1;
            } else {
                gh.push(gh1)
            }
            localStorage.setItem('gh', JSON.stringify(gh))
            state.arrOrder = gh
            return { ...state }
        }

        case 'REMOVE_ITEM': {
            let gh = [...state.arrOrder];
            const gh1 = action.item;
            gh = gh.filter(item => item.id !== gh1.id);
            localStorage.setItem('gh', JSON.stringify(gh))
            state.arrOrder = gh;
            return { ...state }
        }

        case 'CHANG_SL': {
            let gh = [...state.arrOrder];
            let index = gh.find(item => item.id === action.item.id)
            if (index) {
                index.sl += action.sl
                if (index.sl < 1) {
                    if (window.confirm("Do you really want to delete?")) {
                        gh = gh.filter(item => item.id !== action.item.id)
                    }
                }
            }

            state.arrOrder = gh;
            return { ...state }
        }


        case 'PAY': {
            let gh = [...state.arrOrder];
            gh = gh.filter(item => false);
            localStorage.setItem('gh', JSON.stringify(gh));
            const newGh = JSON.parse(localStorage.getItem('gh'));
            return { ...state, arrOrder: newGh };
        }

        case 'LOGOU1': {
            let gh = [...state.arrOrder];
            gh = gh.filter(item => false);

            localStorage.setItem('gh', JSON.stringify(gh));
            const newGh = JSON.parse(localStorage.getItem('gh'));
            state.history = []
            return { ...state, arrOrder: newGh };
        }
        case 'HISTORY': {
            state.history = action.history;
            return { ...state }
        }
        case 'HISTORY_DETAIL': {
            state.historyDetail = action.historyDetail;
            return { ...state }
        }

        default: return state;
    }
}