import { useQuery } from "react-query"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import ProductItem from "../../components/product/item"
import { useParams } from "react-router-dom"
import { GET_PRODUCTS,Product,Products } from "../../graphql/products"

const ProductList = ()=> {
    const { data } = useQuery<Products>(QueryKeys.PRODUCTS,()=> graphqlFetcher(GET_PRODUCTS))

    console.log(data);

    return (<div>
        <h2>상품목록</h2>
        <ul className="products">
            {data?.products?.map(product => (
                <ProductItem {...product} key={product.id}></ProductItem>
            ))}

        </ul>
    </div>)
}


export default ProductList
