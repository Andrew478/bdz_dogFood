import '../../index.css';



export const CartItem = ({ name, pictures, product }) => {
    return 
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

    <ul>
        <li className="characteristics2">
            <div style={{display: 'flex', gap:'10px'}}>
                <img src="https://4lapy.ru/resize/480x480/upload/iblock/f8c/f8caa0042eed1704f03260bfd21a9488.jpg" className="cart-page__pic"></img>
                <p style={{fontWeight: 700}}>Natural Ingredients Сухой корм для щенков крупных пород, с курицей</p>
            </div>
            <div style={{display: 'flex', gap:'20px', alignItems:'center'}}>
                <div className="cart__button-add__background" style={{maxHeight: '60px'}}>
                    <button className="button-cart__add">-</button>
                    <p className="button-cart__count">1</p>
                    <button className="button-cart__add">+</button>
                </div>
                <p className="price-value2">3249.35 ₽</p>
            </div>
        </li>
    </ul>
}