import React from 'react'
import  Products from '../Pages/Products'
import { NavLink } from 'react-router-dom';
import '../../App.css';
import { FcShop } from 'react-icons/fc';


export default function Footer() {
    return (
					
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
  <FcShop />
    <span className="brand-text font-weight-light">E-Commerce</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
  
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <NavLink to={'/home/profile'} className="d-block">Nadhem Soumri</NavLink>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <NavLink to='/home/dashoard' className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
          </NavLink>
          </li>
          <li className="nav-item menu-open">
          <NavLink to='/home/Products' className="nav-link active">
            <p>
              Products
            </p>
          </NavLink>
          </li>
          <li className="nav-item menu-open">
          <NavLink to='/home/categories' className="nav-link active">
            <p>
              Categories
            </p>
          </NavLink>
          </li> 
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
     

    )
}

