import { CartItem } from "../CartItem";

export const CartItemsList = ({cartList}) => {

    return (<div className='cartListItems1'>
        {cartList.map((element, i) => {
            return <CartItem key={i} img={element.img} name={element.name} price={element.price} />
        })}
    </div>)
}