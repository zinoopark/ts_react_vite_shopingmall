import { Product } from "../../graphql/products"

const ProductDetail = ({
    item: {
        title,
        imageUrl,
        description,
        price,
    },
} :{
    item: Product
}) => {

    return(<div className="product-detail">
    <p className="product-detail__category">{}</p>
    <p className="product-detail__title">{title}</p>
    <p className="product-detail__description">{description}</p>
    <img className="product-detail__image" src={imageUrl}></img>
    <span className="product-detail__price">{price}</span>
    <span className="product-detail__rating"></span>
</div>)
}

export default ProductDetail