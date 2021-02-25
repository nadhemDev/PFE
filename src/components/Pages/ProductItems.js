import React from 'react'; 
import {Card, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import products, {getById} from '../../API/products'


export default function ProductItem(props){
    const {product} = props;

    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">
                    {product.name}
                </h3>
                <p className="card-text">
                    Price:{product.price}$
                </p>
                
                <NavLink to={"/products/" + product.id} className="btn btn-primary">Details</NavLink>
            </div>
        </div>
    );
}