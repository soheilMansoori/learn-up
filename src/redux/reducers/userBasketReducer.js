import Cookies from "universal-cookie";

// action types 
const getUserBasket = "GET_USER_BASKET";
const addToBasket = "ADD_TO_BASKET";
const removeFromBasket = "REMOVE_FROM_BASKET";
const updateBasket = "UPDATE_BASKET";
const clearBasket = "CLEAR_BASKET";

// create reducer
function userBasketReducer(state = [], action = {}) {
    switch (action.type) {
        case getUserBasket: {
            const newState = getUserBasketFromCookies() || [];
            return newState;
        }
        case addToBasket: {
            const newState = [...state, action.payload];
            addUserBasketToCookies(newState)
            return newState;
        };
        case removeFromBasket: {
            const newState = state.filter(product => product.id !== action.payload);
            updateUserBasketInCookies(newState);
            return newState;
        };
        case updateBasket: {
            const newState = action.payload;
            updateUserBasketInCookies(newState);
            return newState;
        };
        case clearBasket: {
            const newState = []
            clearUserBasketFromCookies();
            return newState;
        };
        default: {
            return state;
        };
    }
};


// action creators
const getUserBasketAction = () => ({ type: getUserBasket });
const addToBasketAction = (productDetails) => ({ type: addToBasket, payload: productDetails });
const removeFromBasketAction = (productID) => ({ type: removeFromBasket, payload: productID });
const updateBasketAction = (products) => ({ type: removeFromBasket, payload: products });
const clearBasketAction = () => ({ type: clearBasket });

// exports
export {
    userBasketReducer,
    getUserBasketAction,
    addToBasketAction,
    removeFromBasketAction,
    updateBasketAction,
    clearBasketAction,
};

////////////////////////////////// utility functions //////////////////////////////////////////////////////////////////
function getUserBasketFromCookies() {
    const cookies = new Cookies(null, { path: '/' });
    return cookies.get('userBasket');
};
function addUserBasketToCookies(userBasket) {
    const cookies = new Cookies(null, { path: '/' });
    const date = new Date();
    date.setTime(date.getTime() + (3 * 24 * 60 * 60 * 1000)); // expires cookie after three day 
    const expires = date;
    cookies.set('userBasket', JSON.stringify(userBasket), { path: '/', expires });
};

function updateUserBasketInCookies(newUserBasket) { // update userBasket in cookies
    const cookies = new Cookies(null, { path: '/' });
    const date = new Date();
    date.setTime(date.getTime() + (3 * 24 * 60 * 60 * 1000)); // expires cookie after three day 
    const expires = date;
    cookies.set('userBasket', JSON.stringify(newUserBasket), { path: '/', expires });
};

function clearUserBasketFromCookies() { // clear userBasket from cookies
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove('userBasket', { path: '/' });
};