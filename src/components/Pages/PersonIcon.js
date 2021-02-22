import React from 'react'
import Login from '../Auth/Login'
import Button from 'react-bootstrap/Button';


const PersonIcon = () => {
    return (
        <div>
           <i onClick={Login} class="fas fa-user"></i> 
        </div>
      
    )
}

export default PersonIcon
