import { CartType } from "../../graphql/cart"


const ItemData = ({imageUrl, price, title}:Pick<CartType, 'imageUrl' | 'price' | 'title'>)=>{
    <>
        <img src= {imageUrl } className = "cart-item__image"></img>
        <p className="cart-item__price">{ price} </p>
        <p className="cart-item__title">{title}</p>
    </>
}

export default ItemData;