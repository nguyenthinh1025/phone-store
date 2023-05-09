import { history } from "../../App";
import { http } from "../../response/response"



export const GetListPhoneAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/phone/getallphone');
            const action = {
                type: "GET_LIST_PHONE",
                arrPhone: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetPhoneIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/phone/getphonebyid/${id}`);
            const action = {
                type: "GET_BY_ID",
                phoneByID: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetPhoneIdTypeAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/phone/getPhoneByIdType/${id}`);
            const action = {
                type: "GET_BY_IDTYPE",
                arrPhone: result.data.data[0].phones
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdatePhoneAction = (id, value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/phone/updatephone/${id}`, value);
            const action = GetListPhoneAction()
            dispatch(action)
            history.push('/admin')
        } catch (error) {
            console.log(error);
        }
    }
}

export const CreatePhoneAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/phone/createphone`, value);
            const action = GetListPhoneAction()
            dispatch(action)
            history.push('/admin')
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeletePhoneAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/phone/deletephone/${id}`);
            const action = GetListPhoneAction()
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
