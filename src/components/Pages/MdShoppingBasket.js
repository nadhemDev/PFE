import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { MdShoppingBasket } from 'react-icons/md';

function MdShoppingBasket (Props){
    return <div id="cart-icon">
        <Link to="/cart">
            <span className="badge badge-danger">{Props.totalQuantity}</span>
        </Link>
    </div>
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt, 0),
    };
}

export default connect(mapStateToProps)(MdShoppingBasket );