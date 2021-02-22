import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Auth/Login'
import PersonIcon from '../Pages/PersonIcon';
import Cart from '../Pages/Cart';
import Toast from 'react-bootstrap/Toast';
import { MdShoppingBasket } from 'react-icons/md';


export default function Header() {
  const [show, setShow]= useState(false)
const Click  = () =>{
  setShow(true)
}



    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
       <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
       </li>
       
        </ul>
        {/* SEARCH FORM */}
          <div className='col-sm-8 col-md-8'>

          </div>
          <div className='col-sm-2 col-md-2'>
            <div className='row'>
      <div className='col-md-2'>
        <MdShoppingBasket  style={{cursor:'pointer',color:"blue"}} onClick={Click} />

      </div>
      <div className='col-md-2'>0.000DT</div>

            </div>
          </div>
          <div>

   
      <Toast 
      style={{
        position: 'absolute',
        top: 80,
        left: 550,
      }}
      onClose={() => setShow(false)} show={show} >
        
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Show Cart</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body> 
          <NavLink to ={'/home/cart'}><button>cart
            </button></NavLink>

          </Toast.Body>
          
        </Toast>

            </div>
            {/* Right navbar links */}
            <NavLink to='/Login' className="nav-link active">
            <PersonIcon  />
            </NavLink> 
            
        
          </nav>

              )
          }
