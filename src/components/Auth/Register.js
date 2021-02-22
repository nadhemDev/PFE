import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../../App.css';
import './Register.css'
import {NavLink} from 'react-router-dom';
const Register = () => {
    return (
        <div>
           <div>
			<Row className='pt-5'>
				<Col xs={3}></Col>
					<Col xs={6}>
					<Card>
				<div className="wrapper fadeInDown">
					<div id="formContent">
						{/* Tabs Titles */}
						{/* Icon */}
						<div className="fadeIn first">
						<i class="fas fa-user-tie"></i>/
						</div>
						{/* Login Form */}
						<form>
                        <input type="text" className="fadeIn third" name="name" placeholder="Nom" />
                         <input type="text"  className="fadeIn third" name="name2" placeholder="Prénom" />
						<input type="text" id="login" className="fadeIn second" name="user" placeholder="User" />
						<input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
						<input type="submit" className="fadeIn fourth" defaultValue="Sing Up" />
						</form>
						{/* Remind Passowrd */}
						<div id="formFooter">
                        <NavLink to={'/Login'} className="d-block">vous avez un compte ??</NavLink>

						</div>
					</div>
			  		</div>

					</Card>
					</Col>
					<Col xs={3}></Col>
					</Row>
					</div>
            
        </div>
    )
}

export default Register
