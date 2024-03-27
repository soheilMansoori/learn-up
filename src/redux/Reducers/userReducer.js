import Cookies from "universal-cookie";

// action types
const logInUser = "LOG_IN_USER";
const logOutUser = "LOG_OUT_USER";
const refreshToken = "REFRESH_TOKEN";

// default state
const defaultState = {
    userID: null,
    isLogin: false,
    userName: null,
    userToken: null,
    role: null,
    userInfos: {},
}

// create reducer
function userReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case logInUser: {
            const { token, id, username, phone, role } = action.payload;
            const userInfos = { token, id, username, phone, role }
            addTokenToCookies(token) // add token to cookie
            const newState = {
                userID: id,
                isLogin: true,
                userName: username,
                userToken: token,
                role,
                userInfos,
            }
            return newState
        };
        case logOutUser: {
            removeTokenFromCookies() // remove token from cookies
            const newState = defaultState
            return newState
        };
        case refreshToken: {
            const newState = {}
            return newState
        };
        default: {
            return state
        };
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
};

////////////////////////////////// utility functions //////////////////////////////////////////////////////////////////
function addTokenToCookies(token) { // add token to cookie
    const cookies = new Cookies(null, { path: '/' });
    const date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000)); // expires cookie after one day 
    const expires = date;
    cookies.set('token', token, { path: '/', expires });
};

function removeTokenFromCookies() { // remove token from cookies
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove('token', { path: '/' });
};