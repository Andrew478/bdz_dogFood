import SiteImages from "../assets/images"
import {Routes, Route, Link} from "react-router-dom";

export function Product () {
    return (
        <div className="mainWrapper">
            {/* <h1>Страница товара</h1> */}
            <div><button className="small-grey-text button-back">Назад</button></div>
            <h2>Natural Ingredients Сухой корм для щенков крупных пород, с курицей</h2>
            <div><span className="small-grey-text">Артикул:</span> 2388907 звезды <a href='#' className="link-feedback">Отзывы</a></div>
            <div className="cart-section__2columns">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="https://4lapy.ru/resize/480x480/upload/iblock/f8c/f8caa0042eed1704f03260bfd21a9488.jpg" className="product-page__pic"></img>
                </div>
                <div className="cart-section__2">
                    <p className="price-value">3249.35 ₽</p>
                    <div className="product__2buttons">
                        <div className="cart__button-add__background">
                            <button className="button-cart__add">-</button>
                            <p className="button-cart__count">1</p>
                            <button className="button-cart__add">+</button>
                        </div>
                        <button className="button-cart__link-to-cart"><Link to="/cart">В корзину</Link></button>
                    </div>
                    <div><button className="button-add-to-favorites">В избранное</button></div>
                    <div className="product-page__info01">
                        <img src={SiteImages['icon_delivery']} className="product-page__info01__icon"></img>
                        <div>
                            <h3>Доставка по всему миру!</h3>
                            <p>Доставка курьером — <span style={{ fontWeight: 700 }}>от 399₽</span></p>
                            <p>Доставка в пункт выдачи — <span style={{ fontWeight: 700 }}>от 199₽</span></p>
                        </div>
                    </div>
                    <div className="product-page__info01">
                        <img src={SiteImages['icon_warranty']} className="product-page__info01__icon"></img>
                        <div>
                            <h3>Гарантия качества</h3>
                            <p>Если вам не понравилось качество нашей продукции, мы вернём деньги либо сделаем всё возможное, чтобы удовлетворить ваши нужды.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Описание</h2>
                <p style={{maxWidth: '80%'}}>ABBA Natural Ingredients Puppy Large – это полнорационный корм со свежим мясом курицы и с высоким содержанием натуральных ингредиентов, разработанный специально для щенков крупных пород. Корм сбалансирован по составу и количеству витаминов и питательных веществ для быстро растущего организма. Высокое количество протеина способствует быстрому насыщению и правильному развитию мышечного корсета.</p>
                </div>
            <div>
                <h2>Таблица характеристик</h2>
                <ul style={{maxWidth: '50%'}}>
                    <li className="characteristics">
                        <p>Свойство:</p>
                        <p>Значение описание характеристика</p>
                    </li>
                    <li className="characteristics">
                        <p>Свойство:</p>
                        <p>Значение описание характеристика</p>
                    </li>
                    <li className="characteristics">
                        <p>Свойство:</p>
                        <p>Значение описание характеристика</p>
                    </li>
                    <li className="characteristics">
                        <p>Свойство:</p>
                        <p>Значение описание характеристика</p>
                    </li>
                    <li className="characteristics">
                        <p>Свойство:</p>
                        <p>Значение описание характеристика</p>
                    </li>
                </ul>
            </div>
            {/* <div>
                <h2>Отзывы</h2>
                <button>Написать отзыв</button>
                <div>Отзыв 1</div>
                <div>Отзыв 2</div>
                <div>Отзыв 3</div>
            </div> */}
        </div>
    )
}
