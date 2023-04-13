import React, { Component } from 'react';
import Product from '../Products/Product';

class ProductList extends Component {
    renderProduct =() => {

        if (this.props.products.length === 0)
            return <div>There is no product in cart</div>;
        return this.props.products.map((product, index) => {
            return (
                <Product 
                // name={product.title}
                // price={product.price}
                product ={product}
                key={index}
                onDelete={() => this.props.onRemove(product.id)}
                onIncrement = {() => this.props.onIncrement(product.id)}
                onChange={ (e) => this.props.onChange(e, product.id)}
                onDecrement = {() => this.props.onDecrement(product.id)}
                />
            )
        })
    };   



    render() { 
        return (
            <div>
                {!this.props.products.length && <div> go to shoppings</div>}
                {this.renderProduct()}
            </div>
        );
    }
}
 
export default ProductList;