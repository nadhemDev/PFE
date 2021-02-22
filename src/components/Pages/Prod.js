import React from 'react';
import {getById} from '../../API/products'
export default class Prod extends React.Component{
    state ={
        product: {}
    };
    componentDidMount(){
        const id = this.props.match.params.id;
        getById(parseInt(id))
        .then(product => {
            this.setState({
                product
            })
        })   
    }
    render(){
        return(
            <div>
                Product
            </div>
        )
    }
    
}