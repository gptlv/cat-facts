import { configureStore } from "@reduxjs/toolkit";
import { meowfactsApi } from "../services/meowfacts";
// import quoteReducer from "../features/quote/quoteSlice"

const store = configureStore({
    reducer: {
        [meowfactsApi.reducerPath]: meowfactsApi.reducer,
        // quote: quoteReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(meowfactsApi.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch