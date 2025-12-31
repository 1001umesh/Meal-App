import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productApi=createApi({
    reducerPath:'productApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://6943679069b12460f31474f0.mockapi.io'}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:'/products',
                method:'GET',
                
            })
        })
    })
})
export const{useGetProductsQuery}=productApi;