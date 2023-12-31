import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const meowfactsApi = createApi({
    reducerPath: "meowfactsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://meowfacts.herokuapp.com/"}),
    endpoints: (builder) => ({
        getFact: builder.query({
            query: () => "/"
        }),

    })
})

export const {useGetFactQuery} = meowfactsApi;
