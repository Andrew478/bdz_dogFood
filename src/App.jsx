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
import Footer from "./components/Footer";
import Header from "./components/Header";

import products from "./assets/data/products.json";


function App() {
  return <>
    
    <Header />
    <Routes> {/* Пути ко всем страницам сайта */}
      <Route path="/" element={<Home/>}/>  {/* простой слеш это главная страница */}
      <Route path="/catalog" element={<Catalog/>}/>  {/* каталог товаров */}
      <Route path="/catalog/:name" element={<Catalog isCategory={true}/>}/>  {/* каталог товаров по категориям */}
      <Route path="/product/:id" element={<Product prod={products[1]}/>}/>  {/* страница одного товара  */}
      <Route path="/cart" element={<Cart cart={products}/>}/>  {/* корзина */}

      <Route path="/favorites" element={<Favorites/>}/>  {/* избранное */}
      <Route path="/profile" element={<Profile/>}/>  {/* профиль пользователя */}
      <Route path="/auth" element={<Auth/>}/>  {/* авторизация \ регистрация */}
      <Route path="/addProduct" element={<AddProduct/>}/>  {/* добавить товар */}
      <Route path="/content/delivery" element={<ContentDelivery/>}/>  {/* статика: информация о доставке */}

      <Route path="/content/about" element={<ContentAbout/>}/>  {/* статика: информация о магазине */}
    </Routes>

    <Footer />
  </>
}

export default App;
