import { useQuery } from "react-query"
import CartList from "../../components/cart"
import { CartType, GET_CART } from "../../graphql/cart"
import { graphqlFetcher, QueryKeys } from "../../queryClient"

const Cart = () =>{
    const {data} =  useQuery<CartType[]>(QueryKeys.CART, () => graphqlFetcher(GET_CART),{
        staleTime: 0,
        cacheTime: 1000,
    })

    const cartItems = Object.values(data || {}) as CartType[]
    if(!cartItems.length) <div>장바구니가 비었습니다.</div>

    return <CartList items = {cartItems}></CartList>
}

export default Cart