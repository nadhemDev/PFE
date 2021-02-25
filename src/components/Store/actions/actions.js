import {ADD_TO_CART, REMOVE_FROM_CART} from './types'

export function addTOcart(productsInfo, quantity){
    return {
        type: ADD_TO_CART,
        productsInfo,
         quantity
    }

}
export function removeFromcart(index){
    return {
        
        type: REMOVE_FROM_CART,
        index,
         
    }

}