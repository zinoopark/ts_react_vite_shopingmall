import request, { RequestDocument } from 'graphql-request';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
//   import { getTodos, postTodo } from '../my-api'
  
  // Create a client
    export const getClient = (()=>{
        let client : QueryClient | null = null;
        return () =>{
            if(!client) client = new QueryClient({
                defaultOptions: {
                    queries: {
                        cacheTime: Infinity,
                        staleTime: Infinity,
                        refetchOnMount: false,
                        refetchOnReconnect: false,
                        refetchOnWindowFocus: false,
                }
            }
            });
            return client;
        } 
    })()

    const BASE_URL = '/'

    export const restFetcher = async ({
        method,
        path,
        body,
        params
    }: {
        method: 'GET' | 'POST'| 'PUT' | 'DELETE' | 'PATCH';
        path: string;
        body?: AnyOBJ
        params?: AnyOBJ
    }) =>{
        try{
            let url = `${BASE_URL}${path}`
            const fetchOptions: RequestInit = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Acces-Control-Allow-Origin': BASE_URL
                }
            }
            if(params){
                const searchParams = new URLSearchParams(params);
                url += '?' + searchParams.toString()
            }
            if(body){
                fetchOptions.body = JSON.stringify(body)
            }

            const res = await fetch(url, fetchOptions)
            const json = await res.json()
            return json;
        } catch(err){
            console.log(err)
        }
    }

    export const graphqlFetcher = (query: RequestDocument , variables = {}) => request(BASE_URL, query, variables)

    export const QueryKeys = {
        PRODUCTS: 'PRODUCTS',
        CART: 'CART'
    }

