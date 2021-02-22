import React from 'react'
import '../../App.css';
import { Avatar } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Product from '../Pages/Product';
import Categories from '../Pages/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Switch} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Login from '../Auth/Login';
import Cart from '../Pages/Cart';
import Prod from '../Pages/Prod'

const Content =() =>{
    return(
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
        <Switch>
            <Route path={'/home/profile'}>
                <Profile />
            </Route>
            <Route path={'/home/dashoard'}>
                <Dashboard />
            </Route>
            <Route path={'/home/product'}>
                <Product />
            </Route>
            <Route path={'/home/Categories'}>
                <Categories />
            </Route>
            <Route path={'/home/cart'}>
                <Cart />
            </Route>
            <Route path={'/home/products/id'}>
                <Prod />
            </Route>

        </Switch>
    </div>{/* /.container-fluid */}
  </div>
</div>




 

    
    )
}
export default Content;
