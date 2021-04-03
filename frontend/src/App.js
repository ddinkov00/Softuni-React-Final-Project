import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
