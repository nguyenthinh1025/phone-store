import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Detail from './pages/Detail/Detail';
import PageCart from './pages/Cart/PageCart';
import Product from './pages/Product/Product';
import History from './pages/History/History';
import DetailHistory from './pages/History/DetailHistory';
import Admin from './pages/Admin/Admin';
import EditProduct from './pages/Admin/EditProduct';
import AddProduct from './pages/Admin/AddProduct';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
export const history = createBrowserHistory()
function App () {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path='/' Component={Home} />
        <HomeTemplate exact path='/detail/:id' Component={Detail} />
        <HomeTemplate exact path='/cart' Component={PageCart} />
        <HomeTemplate exact path='/product' Component={Product} />
        <HomeTemplate exact path='/history/:id' Component={History} />
        <AdminTemplate exact path='/admin' Component={Admin} />
        <HomeTemplate exact path='/detailhistory/:id' Component={DetailHistory} />
        <AdminTemplate exact path='/editproduct/:id' Component={EditProduct} />
        <AdminTemplate exact path='/addproduct' Component={AddProduct} />
      </Switch>
    </Router>
  );
}

export default App;
