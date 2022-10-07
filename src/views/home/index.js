import React, { Component } from 'react';
import '../../NavBar.css';
import './index.css';
import original from '../../products/original-cinnamon-roll.jpg';
import apple from '../../products/apple-cinnamon-roll.jpg';
import raisin from '../../products/raisin-cinnamon-roll.jpg';
import walnut from '../../products/walnut-cinnamon-roll.jpg';
import chocolate from '../../products/double-chocolate-cinnamon-roll.jpg';
import strawberry from '../../products/strawberry-cinnamon-roll.jpg';

import Roll from '../../Roll.js';
import NavBar from '../../NavBar.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartTotalPrice: 0,
      currentRoll: {},
      rollData: [
        {
          name: "Original cinammon roll",
          price: 2.49,
          imageURL: original,
          index: 0
        },
        {
          name: "Apple cinammon roll",
          price: 3.49,
          imageURL: apple,
          index: 1
        },
        {
          name: "Raisin cinammon roll",
          price: 2.99,
          imageURL: raisin,
          index: 2
        },
        {
          name: "Walnut cinammon roll",
          price: 3.49,
          imageURL: walnut,
          index: 3
        },
        {
          name: "Double-chocolate cinammon roll",
          price: 3.99,
          imageURL: chocolate,
          index: 4
        },
        {
          name: "Strawberry cinammon roll",
          price: 3.99,
          imageURL: strawberry,
          index: 5
        }
      ],
  
    }
  }

  showCart = (rollIndex, rollName, glazing, packSize, totalPrice) => {
    const roll = {
      name: rollName,
      glaze: glazing, 
      pack: packSize,
      price: totalPrice,
      imageURL: this.state.rollData[rollIndex].imageURL,
      index: this.state.cart.length
    }
    this.setState(prevState => ({
      ...prevState,
      cartTotalPrice: prevState.cartTotalPrice + Number(roll.price),
      cart: [...prevState.cart, roll],
      currentRoll: roll
    }));
  }

  removeFromCart = (rollIndex) => {
    this.setState(prevState => ({     
      ...prevState,	
      cart: (this.state.cart.length === 1 ) ? [] : prevState.cart.filter(roll => roll !== this.state.cart[rollIndex]),
      cartTotalPrice: (this.state.cart.length === 1 ) ? 0 : prevState.cartTotalPrice - this.state.cart[rollIndex].price
    }))
  }

  render() {
    console.log("this.state.currentRoll", this.state.currentRoll)
    return (
      <div className="App">
          <NavBar
            totalPrice= {this.state.cartTotalPrice.toFixed(2)}
            cart= {this.state.cart}
            rollData= {this.state.rollData}
            removeFromCart= {this.removeFromCart}
          />
        <div className="search">
          <input type="text"></input>
          <button type="submit">Search</button>
        </div>
        <div className="list">
        <Roll
          rollIndex={0}
          imageURL={this.state.rollData[0].imageURL}
          rollName={this.state.rollData[0].name} 
          price={this.state.rollData[0].price}
          addToCart={this.showCart}  /> 
        <Roll 
          rollIndex={1}
          imageURL={this.state.rollData[1].imageURL}
          rollName={this.state.rollData[1].name} 
          price={this.state.rollData[1].price}
          addToCart={this.showCart}  /> 
        <Roll 
          rollIndex={2}
          imageURL={this.state.rollData[2].imageURL}
          rollName={this.state.rollData[2].name} 
          price={this.state.rollData[2].price}
          addToCart={this.showCart}    />
      </div>

      <div className="list">
        <Roll 
          rollIndex={3}
          imageURL={this.state.rollData[3].imageURL}
          rollName={this.state.rollData[3].name} 
          price={this.state.rollData[3].price}
          addToCart={this.showCart}    />
        <Roll 
          rollIndex={4}
          imageURL={this.state.rollData[4].imageURL}
          rollName={this.state.rollData[4].name} 
          price={this.state.rollData[4].price}
          addToCart={this.showCart}    />
        <Roll 
          rollIndex={5}
          imageURL={this.state.rollData[5].imageURL}
          rollName={this.state.rollData[5].name} 
          price={this.state.rollData[5].price}
          addToCart={this.showCart}    />
      </div>
    </div>
    );
  }
}

export default HomePage;