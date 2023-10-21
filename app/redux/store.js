import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userManagementSlice from './userActionService';

const customizedMiddleware  = getDefaultMiddleware({
    serializableCheck:false
}) 

export const store = configureStore({
    reducer:{
        userManager:userManagementSlice
    },
    middleware:customizedMiddleware
})