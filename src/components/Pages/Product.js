import React from "react";
import {getById} from "../../API/products";
import {addTOcart} from '../Store/actions/actions'
import {connect} from 'react-redux'



 class Product extends React.Component{

    state={
        loading: true,
        quantity: 0,
        product: {}
    };
    
    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false
                });
            })
    }

    handlQuantity = (event) =>{
        const value = event.target.value;

        if(value <0 )

        return ;

        this.setState({
            quantity:value
        })

    }

    addTOcart = (product) => {
        this.props.addTOcart(product, this.state.quantity);

    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;
        const quantity = this.state.quantity;

        

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'70%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{product.name}</h1>

                        <p>Price: {product.price}$</p>

                        <p>Descrption</p>

                        <br/><br/>

                        <input type="number" value={quantity} onChange={this.handlQuantity} />
                        
                        <br /><br />

                        <p>Total: {quantity * product.price}</p>


                        <button className="btn btn-primary" onClick={() => this.addTOcart(product)}>
                            Add to Cart
                        </button>

                    </div>
                </div> 
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTOcart: (productsInfo, quantity) => dispatch(addTOcart(productsInfo, quantity)),
       
    };
}
export default connect(null, mapDispatchToProps)(Product);