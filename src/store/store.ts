import { configureStore } from "@reduxjs/toolkit";
import { emptySplitApi } from "./emptyApi";

export const store = configureStore({
    reducer: {
        [emptySplitApi.reducerPath]: emptySplitApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(emptySplitApi.middleware)
})
