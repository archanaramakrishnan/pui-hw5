import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    const roll = this.props.cartRoll;
    console.log("roll", roll);
    return (
        <div className="cart">
            <div className="popup">
                <span className="popuptext" id="myPopup">
                    <p>Added to cart: </p>
                    <b>{roll.name}</b>
                    <p>{roll.glaze} glazing</p>
                    <p>Pack of {roll.pack}</p>
                    <p>Price: ${roll.price}</p>
                </span>
            </div>
            
        </div>
      
    );
  }
}

export default Cart;