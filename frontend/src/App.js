import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Login from './components/Identity/Login/index';
import Register from './components/Identity/Register/index';
import Home from './components/Home/index'
import Categories from './components/Categories/index'
import Contact from './components/Contact/index'
import Admin from './components/Admin/index'
import ProductsByCategory from './components/ProductsByCategory/index'
import ProductById from './components/ProductById/index'
import Search from './components/Search/index'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/shop" exact component={ Categories } />
        <Route path="/shop/categories/:categoryId" component={ ProductsByCategory } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/contact" component={ Contact } />
        <Route path="/admin" component={ Admin } />
        <Route path="/product/:id" component={ ProductById } />
        <Route path="/search/:keyword" component={ Search } />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
