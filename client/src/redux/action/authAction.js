import { http } from "../../response/response"


export const LoginAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/user/login', value)
            const action = {
                type: "LOGIN",
                login: localStorage.setItem('login', JSON.stringify(result.data.data)),
                username: localStorage.setItem('username', result.data.data.user?.name),
                msg: result.data.message
            }
            dispatch(action)
            localStorage.setItem('login', JSON.stringify(result.data.data))
            localStorage.setItem('username', result.data.data.user?.name)
            // window.location.reload()
        } catch (error) {
            console.log(error.response?.data.message);
            dispatch({
                type: "CHECK_LOGIN",
                msg: error.response?.data.message
            })
        }
    }
}
export const RegisterAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/user/register', value)


            // window.location.reload()
        } catch (error) {
            console.log(error.response?.data.message);
            dispatch({
                type: "CHECK_LOGIN",
                msg: error.response?.data.message
            })
        }
    }
}