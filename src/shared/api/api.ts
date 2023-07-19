import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataResponse } from "../types/api.ts";

const apiKey = import.meta.env.VITE_API_KEY
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openai.com/v1/',
        headers: {
            Authorization: `Bearer ${apiKey}`,
        }
    }),

    endpoints: build => ({
        requestAnswer: build.mutation<DataResponse, string>({
            query: (content) => ({
                url: 'chat/completions',
                method: 'post',
                body: {
                    model: 'gpt-3.5-turbo-16k',
                    messages: [{
                        role: 'user',
                        content
                    }]
                }
            })
        })
    })
})

export const { useRequestAnswerMutation } = api