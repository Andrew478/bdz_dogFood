import "./index.css";

import {Routes, Route, Link} from "react-router-dom";


const Footer = () => {
    return <footer className="footer">
        <div className="footer__navBlock">
            <h2>DogFood</h2>
            <p>Сделано Андреем Жмако</p>
            <p>Мой <a href='https://github.com/Andrew478' target="_blank">Github</a></p>
            <p>©2023 All rights reserved</p>
        </div>
        <div className="footer__navBlock">
            <h2>Авторство</h2>
            <p><a href="https://www.flaticon.com/free-icons/siberian-husky" title="siberian husky icons">Siberian husky icons by smalllikeart - Flaticon</a></p>
            <p><a href="https://www.flaticon.com/free-icons/shiba" title="shiba icons">Shiba icons by smalllikeart - Flaticon</a></p>
            <p><a href="https://www.flaticon.com/free-icons/labrador" title="labrador icons">Labrador icons by smalllikeart - Flaticon</a></p>
            <p><a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons by smalllikeart - Flaticon</a></p>
            <p><a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons by smalllikeart - Flaticon</a></p>
        </div>
        <div className="footer__navBlock">
            <p><Link to="/auth">Войти</Link></p>
            <p><Link to="/content/Delivery">Доставка</Link></p>
            <p><Link to="/content/About">О нас</Link></p>
        </div>
    </footer>
}

export default Footer;