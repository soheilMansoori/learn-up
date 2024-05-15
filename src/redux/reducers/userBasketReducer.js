import Cookies from "universal-cookie";

// action types 
const refreshUserBasket = "REFRESH_USER_BASKET";
const addToBasket = "ADD_TO_BASKET";
const removeFromBasket = "REMOVE_FROM_BASKET";
const updateBasket = "UPDATE_BASKET";
const clearBasket = "CLEAR_BASKET";

// default state 
const defaultState = { totalPrice: null, productsPrice: null, sendPrice: null, offPrice: null, products: [] };

// create reducer
function userBasketReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case refreshUserBasket: {
            const { products = [] } = getUserBasketFromCookies();
            const [productsPrice, offPrice, sendPrice, totalPrice] = userFactor(products);
            const newState = { totalPrice, productsPrice, sendPrice, offPrice, products };
            return newState;
        }
        case addToBasket: {
            const products = [...state.products, action.payload]
            const [productsPrice, offPrice, sendPrice, totalPrice] = userFactor(products);
            const newState = { totalPrice, productsPrice, sendPrice, offPrice, products };
            addUserBasketToCookies(newState)
            return newState;
        };
        case removeFromBasket: {
            const products = state.products.filter(product => product.id !== action.payload);
            const [productsPrice, offPrice, sendPrice, totalPrice] = userFactor(products);
            const newState = { totalPrice, productsPrice, sendPrice, offPrice, products };
            updateUserBasketInCookies(newState);
            return newState;
        };
        case updateBasket: {
            const products = action.payload;
            const [productsPrice, offPrice, sendPrice, totalPrice] = userFactor(products);
            const newState = { totalPrice, productsPrice, sendPrice, offPrice, products };
            updateUserBasketInCookies(newState);
            return newState;
        };
        case clearBasket: {
            const newState = defaultState;
            clearUserBasketFromCookies();
            return newState;
        };
        default: {
            return defaultState;
        };
    }
};


// action creators
const refreshUserBasketAction = () => ({ type: refreshUserBasket });
const addToBasketAction = (productDetails) => ({ type: addToBasket, payload: productDetails });
const removeFromBasketAction = (productID) => ({ type: removeFromBasket, payload: productID });
const updateBasketAction = (products) => ({ type: updateBasket, payload: products });
const clearBasketAction = () => ({ type: clearBasket });

// exports
export {
    userBasketReducer,
    refreshUserBasketAction,
    addToBasketAction,
    removeFromBasketAction,
    updateBasketAction,
    clearBasketAction,
};

////////////////////////////////// utility functions //////////////////////////////////////////////////////////////////
function userFactor(products) {
    const productsPrice = products.reduce((acc, product) => acc + Number(product.productPrice * product.productCount), 0);
    const offPrice = products.reduce((acc, product) => acc + Number(product.productOffer), 0);
    let sendPrice = 0;
    for (const product of products) {
        sendPrice += (product.productCount * 12000)
    };
    const totalPrice = (Number(productsPrice) + sendPrice) - offPrice;
    return [productsPrice, offPrice, sendPrice, totalPrice];
};
function getUserBasketFromCookies() {
    const cookies = new Cookies(null, { path: '/' });
    return cookies.get('userBasket') || {};
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