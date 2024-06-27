import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import Blog from './components/Home/Blog';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Promo from './components/Promo';
import Shop from './Shop';
import ProductDetail from './components/ProductDetail';
import Auth from './Pages/Auth';
import MyAccount from './components/Auth/MyAccount';
import Cart from './components/Cart';
import Wishlist from './components/Auth/Wishlist';


function App() {


  return (
    <>
      <Promo />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail/:id" element={ <ProductDetail />} />
        <Route path="/cart" element={ <Cart />} />
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
