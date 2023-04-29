import React, { Component } from 'react';
import Product from '../Products/Product';

class ProductList extends Component {
    renderProduct =() => {
        const {onChange, onDecrement, onIncrement, onRemove, products} = this.props
        if (products.length === 0)
            return <div>There is no product in cart</div>;
        return products.map((product, index) => {
            return (
                <Product 
                // name={product.title}
                // price={product.price}
                product ={product}
                key={index}
                onDelete={() => onRemove(product.id)}
                onIncrement = {() => onIncrement(product.id)}
                onChange={ (e) => onChange(e, product.id)}
                onDecrement = {() => onDecrement(product.id)}
                />
            )
        })
    };   



    render() {
        const {products} = this.props
        return (
            <div>
                {!products.length && <div> go to shoppings</div>}
                {this.renderProduct()}
            </div>
        );
    }
}
 
export default ProductList;