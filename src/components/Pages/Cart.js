import React from "react";
import CartItem from "../Pages/CartItem";
import ProductsApi from "../../API/products";
import {connect} from 'react-redux'
import { clearCart } from "../Store/actions/actions";

class Cart extends React.Component{


    placeOrder = () =>{
        //send the request to the server
        //clear cart 
        this.props.clearCart();
        alert ('no product');

    };

  
    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                    {this.props.CartItem.map((item, index) => 
                        <div className={'col-3'} key={item.product.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.total}
                </h3>

                <button class="btn btn-primary btn-block" onClick={this.placeOrder}>Place Order</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        CartItem: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };

   
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);