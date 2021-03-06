import React, { Component } from 'react'
import ProductItems from './ProductItems'
import ProductsApi from '../../API/products';

export default class Product extends React.Component{

    state = {
        quantity: 0,
        products: [],
    };

    componentDidMount(){
        ProductsApi.getAll()
        .then( data => {
            this.setState({

              products: data
         })

        });

    }

     render() {

    return (
        <div>
            <h1>Products</h1>
            <br ></br>
            <div className="row">
                {this.state.products.map(product => 
                <div className="col-md-3" key={product.id}>
               <ProductItems   product={product} />
               </div>
               )}
            
             </div>
        </div>
    );
}
}


