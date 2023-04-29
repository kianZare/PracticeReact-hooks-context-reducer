import { Component } from 'react';
import './App.css';
// import ProductList from './components/ProductList/ProductList';
// import NavBar from './components/NavBar/NavBar';
// import ClassCounter from './components/ProductList/ClassCounter';
// import FunctionalCounter from './components/ProductList/FunctionalCounter';
// import ClassTimer from './components/ProductList/ClassTimer';
// import FunctionalTimer from './components/ProductList/FunctionalTimer';
import Wrapper from './components/hoc/Wrapper';
import HoverCounter from './components/hocExample/HoverCounter';
import ClickCounter from './components/hocExample/ClickCounter';


class App extends Component {
  constructor(props) {
    super(props)
    console.log("app.js constructor");
  }

  state = { 
    products: [
      {title: "React.js", price: "$200", id: 1, quantity:1},
      {title: "Next.js", price: "$120", id: 2, quantity:3},
      {title: "JavaScript.js", price: "$79", id: 3, quantity:5},
    ],
    isShow: true,
 };

 removeHandler = (id) => {
  // console.log('clicked', id)
  const filteredProducts = this.state.products.filter((p) => p.id !== id);
  this.setState({products: filteredProducts})
}

incrementHandler = (id) => {
  // 1. id => ok
  // 2. index
const index = this.state.products.findIndex((item) => item.id === id);
console.log(index);
// 3. clone the selected index and update the quantity:
const product = { ...this.state.products[index]};
product.quantity++;
// 4. update products
const products = [...this.state.products];
products[index] = product;
this.setState({ products })
};

changeHandler = (event, id) => {
  // 1. id => ok
  // 2. index
  const index = this.state.products.findIndex((item) => item.id === id);
  console.log(index);
  // 3. clone the selected index and update the quantity:
  const product = { ...this.state.products[index]};
  product.title = event.target.value;
  // 4. update products
  const products = [...this.state.products];
  products[index] = product;
  this.setState({ products })
  };

decrementHandler = (id) => {
  // 1. id => ok
  // 2. index
  const index = this.state.products.findIndex((item) => item.id === id);

  // 3. clone the selected index and update the quantity:
  const product = { ...this.state.products[index]};
  if (product.quantity === 1) {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  } else {
    // 4. update products
    const products = [...this.state.products];
    product.quantity--;
    products[index] = product;
    this.setState({ products });
  }
}

componentDidUpdate(prevProps, prevState) {
  console.log("App.js componentDidUpdate");
  console.log("App.js", prevState)
}

shouldComponentUpdate(nextProps, nextState) {
  return true;
}

  render() {
    console.log(this.props);
    return (
      <>
      <ClickCounter />
      <HoverCounter />
        {/* <NavBar 
          totalItems = {this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList 
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeHandler}
          onDecrement={this.decrementHandler}
        /> */}
      </>
      )
  }
}

export default Wrapper(App, "container");
