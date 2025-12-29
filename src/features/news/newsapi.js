import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi=createApi({
    reducerPath:'newsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://6943679069b12460f31474f0.mockapi.io'}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:()=>({
                url:'/news',
                method:'GET',


            })
        })
    })
    
})
export const {useGetNewsQuery,useLazyGetNewsQuery}=newsApi;