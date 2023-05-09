let userLogin = {};
if (localStorage.getItem('login')) {
    userLogin = JSON.parse(localStorage.getItem('login'))
}

let username = '';
if (localStorage.getItem('username')) {
    username = localStorage.getItem('username')
}


const stateDefault = {
    user: userLogin,
    msg: '',
    username: username
}


export const authReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LOGIN': {
            state.user = JSON.parse(localStorage.getItem('login'));
            state.username = localStorage.getItem('username');
            state.msg = '';

            return { ...state }
        }

        case 'CHECK_LOGIN': {
            state.msg = action.msg;
            return { ...state }
        }

        case 'LOGOUT': {
            localStorage.setItem('login', JSON.stringify({ token: 'sasa', user: "eda" }));
            localStorage.setItem('username', '')
            state.user = localStorage.setItem('login', JSON.stringify({ token: 'sasa', user: "eda" }));;
            state.username = localStorage.setItem('username', '');
            localStorage.setItem('admin', '')
            return { ...state }
        }

        default: return state;
    }
}