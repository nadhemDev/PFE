import Products from '../API/products.json';

export function getAll(){
    return Promise.resolve(Products);   
}


export function getById(id){

    const  product = Products.find(item => item.id === id);
    return Promise.resolve(Products);   

}

export default {
    getAll,
    getById
}