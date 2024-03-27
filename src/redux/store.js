import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/userReducer';

const store = configureStore({
    devTools: true,
    reducer: {
        user: userReducer,
    }
});

export default store;