import { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  state = { 
    products: [
      {title: "React.js", price: "$200", id: 1, quantity:1},
      {title: "Next.js", price: "$120", id: 2, quantity:3},
      {title: "JavaScript.js", price: "$79", id: 3, quantity:5},
    ],
 };

 removeHandler = (id) => {
  console.log('clicked', id)
  const filteredProducts = this.state.products.filter((p) => p.id !== id);
  this.setState({products: filteredProducts})
}

incrementHandler = (id) => {
  const products = [...this.state.products];
  const selectedItem = products.find((p) => p.id === id);
  selectedItem.quantity++;
  this.setState({products})
  console.log(products)
};

changeHandler = (event, id) => {
  // console.log(event.target.value, id)
  const products = [...this.state.products];
  const selectedItem = products.find((p) => p.id === id);
  selectedItem.title = event.target.value;
  this.setState({ products })
};

decrementHandler = (id) => {
  const products = [...this.state.products];
  const selectedItem = products.find((p) => p.id === id);
  if (selectedItem.quantity === 1) {
      const filteredProducts =products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts});
  } else {
      selectedItem.quantity--;
      this.setState({products})
  }
}

  render() {
    return (
      <div className='container' id='title'>
        <NavBar totalItems = {this.state.products.filter((p) => p.quantity > 0).length}/>
        <ProductList 
        products={this.state.products}
        onRemove={this.removeHandler}
        onIncrement={this.incrementHandler}
        onChange={this.changeHandler}
        onDecrement={this.decrementHandler}
        />
      </div>
    )
  }
}

export default App;
