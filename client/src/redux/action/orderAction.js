import { http } from "../../response/response"



export const PayAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/order/createorder', value)
            const action = {
                type: "PAY",

            }
            await dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const HistoryAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/order/getlistorder/${value}`)
            const action = {
                type: "HISTORY",
                history: result.data.data
            }
            await dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const HistoryDetailAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/order/getlistorderitem/${value}`)
            const action = {
                type: "HISTORY_DETAIL",
                historyDetail: result.data.data
            }
            await dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}