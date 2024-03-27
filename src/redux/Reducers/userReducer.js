// action types
const logInUser = "LOG_IN_USER";
const logOutUser = "LOG_OUT_USER";
const refreshToken = "REFRESH_TOKEN";

// default state
const defaultState = {
    isLogin: false,
    userName: null,
    token: null,
}

// create reducer
function userReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case logInUser: {
            const newState = {}
            return newState
        }
        case logOutUser: {
            const newState = defaultState
            return newState
        }
        case refreshToken: {
            const newState = {}
            return newState
        }
        default: {
            return state
        }
    }
}

// action creators
const logInUserAction = (payload) => ({ type: logInUser, payload });
const logOutUserAction = () => ({ type: logOutUser });
const refreshTokenAction = (payload) => ({ type: refreshToken, payload });


// exports
export {
    userReducer,
    logInUserAction,
    logOutUserAction,
    refreshTokenAction,
}