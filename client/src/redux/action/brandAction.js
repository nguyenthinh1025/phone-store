import { http } from "../../response/response"



export const getListType = () => {
    return async (dispatch) => {
        try {
            let results = await http.get('/phone/getlisttype');
            const action = {
                type: 'GET_LIST_TYPE',
                arrType: results.data.data
            }
            dispatch(action)
            console.log(results.data.data);

        } catch (error) {
            console.log(error);
        }
    }

}