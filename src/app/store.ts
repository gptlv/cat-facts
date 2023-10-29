import { configureStore } from "@reduxjs/toolkit";
import { meowfactsApi } from "../services/meowfacts";

const store = configureStore({
    reducer: {
        [meowfactsApi.reducerPath]: meowfactsApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(meowfactsApi.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch