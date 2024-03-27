import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
    devTools: true,
    reducer: {
        user: userReducer,
    }
});

export default store;