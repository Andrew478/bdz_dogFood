import "./index.css";

import {Routes, Route, Link} from "react-router-dom";
import Layout from "../Layout";

const Header = () => {
    return (
        <ul className="header"> {/* шапка сайта */}
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/catalog">Каталог</Link>
                    <ul>
                        <li><Link to="/catalog/Snacks">Лакомства</Link></li>
                        <li><Link to="/catalog/Toys">Игрушки</Link></li>
                    </ul>
                </li>
                <li><Link to="/favorites">Избранное</Link></li>
                <li><Link to="/product/Ball">Мячик для собак</Link></li>
                <li><Link to="/addProduct">Добавить товар</Link></li>
                <li><Link to="/cart">Корзина</Link></li>
                <li><Link to="/profile">Профиль</Link></li>
                <li><Link to="/auth">Войти</Link></li>
                <li><Link to="/content/Delivery">Доставка</Link></li>
                <li><Link to="/content/About">О нас</Link></li>

            </ul>
    );
}

export default Header;