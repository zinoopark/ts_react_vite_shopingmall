import { useRoutes } from "react-router-dom";
import { routes } from "./routes"
import { QueryClientProvider } from "react-query";
import { getClient } from "./queryClient";
import { ReactQueryDevtools } from 'react-query/devtools'
import Gnb from "./components/gnb";
import './sass/index.scss'


const App = () =>{
    const elem = useRoutes(routes)
    const queryClient = getClient()
    
    return <QueryClientProvider client={queryClient}>
        <Gnb />
        {elem}
        <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
    
}

export default App;