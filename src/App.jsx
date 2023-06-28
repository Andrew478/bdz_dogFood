import {Routes, Route, Link} from "react-router-dom";
import { // единое место импорта всех страниц из папки pages, прописано в index.js
  AddProduct,
  Auth,
  Cart,
  Catalog,
  ContentAbout,
  ContentDelivery,
  Favorites,
  Home,
  Product,
  Profile
} from "./pages";
import Layout from "./components/Layout";


function App() {
  return <>
    <Layout>
      <ul className="menu">
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
    </Layout>
    
    <Routes> {/* Пути ко всем страницам сайта */}
      <Route path="/" element={<Home/>}/>  {/* простой слеш это главная страница */}
      <Route path="/catalog" element={<Catalog/>}/>  {/* каталог товаров */}
      <Route path="/catalog/:name" element={<Catalog isCategory={true}/>}/>  {/* каталог товаров по категориям */}
      <Route path="/product/:id" element={<Product/>}/>  {/* страница одного товара  */}
      <Route path="/cart" element={<Cart/>}/>  {/* корзина */}

      <Route path="/favorites" element={<Favorites/>}/>  {/* избранное */}
      <Route path="/profile" element={<Profile/>}/>  {/* профиль пользователя */}
      <Route path="/auth" element={<Auth/>}/>  {/* авторизация \ регистрация */}
      <Route path="/addProduct" element={<AddProduct/>}/>  {/* добавить товар */}
      <Route path="/content/delivery" element={<ContentDelivery/>}/>  {/* статика: информация о доставке */}

      <Route path="/content/about" element={<ContentAbout/>}/>  {/* статика: информация о магазине */}
    </Routes>
  </>
}

export default App;
