import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi=createApi({
    reducerPath:'newsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://6943679069b12460f31474f0.mockapi.io'}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:(params)=>({
                url:'/news',
                method:'GET',
                params:params,
            }),
            providesTags:['news']
        }),
        getNewsDetail:builder.query({
            query:(id)=>({
                url:`/news/${id}`,
                method:"GET"
            }),
         providesTags:['news']


        }),


        addNews:builder.mutation({
            query:(body)=>({
                url:'/news',
                method:'POST',
                body
            }),
            invalidatesTags:['news']
        }),
        
        deleteNews:builder.mutation({
            query:(id)=>({
                url:`/news/${id}`,
                method:'DELETE',
                
            }),
            invalidatesTags:['news']
        }),
        updateNews:builder.mutation({
            query:({id,body})=>({
                url:`/news/${id}`,
                body,
                method:'PUT',
            }),
             invalidatesTags:['news']


        })
    })
    
})
export const {useGetNewsQuery,useLazyGetNewsQuery,
    useAddNewsMutation,useDeleteNewsMutation,useUpdateNewsMutation,useGetNewsDetailQuery}=newsApi;