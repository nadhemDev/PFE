import React from 'react'; 
import {Card, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import products, {getById} from '../../API/products'


export default function ProductItems(props){
    const {product} = props;
    
    
    return (
            <div>
                <div class="card" >
                    <Card.Img variant="top" src={product.image}  height="200"  />
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            <p className="card-text">
                           Prix: {product.price}$
                            </p>
                        
                        </Card.Text>
                        <NavLink to={'/home/products/' + product.id}><button className="btn btn-primary" onClick={getById(product.id)}>Details</button></NavLink>
                        </Card.Body>
                </div>
             </div>
                
        
    );
}