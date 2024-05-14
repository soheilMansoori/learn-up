import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { userBasketReducer } from './reducers/userBasketReducer';

const store = configureStore({
    devTools: true,
    reducer: {
        user: userReducer,
        userBasket: userBasketReducer
    }
});

export default store;