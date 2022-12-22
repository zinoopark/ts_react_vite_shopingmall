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
                        cacheTime: Infinity,    //이 부분이 매우 중요하다!
                        staleTime: Infinity,    // 캐시보다도 중요하다. 옛것으로 인식하기 시작하는 시점이 최초 데이터를 fetching하고 화면이 변경했을때부터 카운트를 시작, 디폴트가 0인데 0이 좋아서 한건아님!! 그래서 개발자가 알아서 관리해줘야함
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

