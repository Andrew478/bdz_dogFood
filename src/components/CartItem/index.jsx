import '../../index.css';
import SiteImages from '../../assets/images';


export const CartItem = ({ 
    img,
    name,
    price
 }) => {
    return (
        <ul>
            <li className="characteristics2">
                <div style={{ display: 'flex', gap: '10px' }}>
                    <img src={SiteImages[img]} className="cart-page__pic"></img>
                    <p style={{ fontWeight: 700 }}>{name}</p>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div className="cart__button-add__background" style={{ maxHeight: '60px' }}>
                        <button className="button-cart__add">-</button>
                        <p className="button-cart__count">1</p>
                        <button className="button-cart__add">+</button>
                    </div>
                    <p className="price-value2">{price} ₽</p>
                </div>
            </li>
        </ul>
    )
}

{/* <div className="card">
            <div className='card__sticky card__sticky_type_top-left'>
                {!!product.discount && <span className='card__discount'>-{product.discount}%</span>}
            </div>
            <div className='card__sticky card__sticky_type_top-right'>
                <Like />
            </div>
            <a href='/' className='card__link'>
                <img src={pictures} alt="" className='card__image' />
                <div className='card__desc'>
                    <span className='card__price'>{product.price}</span>
                    <span className='card__weight'>{product.wight}</span>
                    <p className='card__name'>{name}</p>
                </div>
            </a>
            <span onClick={() => { }} className='card__cart btn btn_type_primary '>В корзину</span>

    </div> */}