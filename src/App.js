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
import Prod from './components/Pages/Prod';

import './App.css'


const App = () =>{

  
  return (
    <BrowserRouter>
    <div>
      <Route  path='/home' component={Home} />
      <Route  exact path="/Login" component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/products/:id' component={Prod} />
    </div>
    </BrowserRouter>
  )
}
export default App;
