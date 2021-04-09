import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Login from './components/Identity/Login/index';
import Register from './components/Identity/Register/index';
import Home from './components/Home/index'
import Categories from './components/Categories/index'
import About from './components/About/index'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/shop" exact component={ Categories } />
        <Route path="/shop/categories/:categoryId" />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/about" component={ About } />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
