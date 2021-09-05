import './App.css';
import Header from './components/Header'
import Settings from './components/site_settings/Settings'
import Product from './components/products/Products'
import Basket from './components/basket/Basket';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-7">
        <div className="row">
          <div className="col-md-3 d-none d-xs-none d-sm-block">
            <Settings />
          </div>
          <div className="col-md-6">
            <Product />
          </div>
          <div className="col-md-3 d-none d-xs-none d-sm-block">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
