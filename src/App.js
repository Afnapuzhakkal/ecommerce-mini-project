import './App.css';
import Navbar from './Components/Navbar/navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women'
import Kids from './Pages/Kids';
import Beauty from './Pages/Beauty';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import Profile from './Pages/Profile';
import Wishlist from './Pages/Wishlist';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';


function App() {
  
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail/>}/>
       <Route path="/profile" element={<Profile />} />
       <Route path="/wishlist" element={<Wishlist />} />
       <Route path="/search" element={<Search />} />
       <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>

     </Routes>
    <div className="App">
    </div>
    </>
  );
}

export default App;
