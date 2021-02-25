import React from 'react';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Pages/Home';
import Register from './components/Auth/Register';
import Categories from './components/Pages/Categories';
import Cart from './components/Pages/Cart'
import Product from './components/Pages/Product';
import store from "./components/Store/Store";
import {Provider} from 'react-redux';

import './App.css'


const App = () =>{

  
  return (
    <BrowserRouter>
    <div>
      <Route  path='/home' component={Home} />
      <Route  exact path="/Login" component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact  path="/products/:id" component={Product} />
    </div>
    </BrowserRouter>
  )
}



function AppwithSotre(){
  return   <Provider store={store}>
    <App />
    </Provider>
}
export default AppwithSotre;
