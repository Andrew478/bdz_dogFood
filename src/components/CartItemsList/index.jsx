import { CartItem } from "../CartItem";

export const CartItemsList = (props) => {

    console.log(typeof props);
    console.log(props);

    return (<div className='cartListItems1'>
        {props.map((element, i) => <CartItem key={i} img={element.img} name={element.name}  price={element.price} />)}
    </div>)
}