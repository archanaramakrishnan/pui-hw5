import React, { Component } from 'react';
import './Cart.css';
import './Roll.css';

class Cart extends Component {
  render() {
    console.log("this.props.cart", this.props.cart)
    return (
        <div>
          <hr/>
          <p>Shopping Cart ({this.props.cart.length} items)</p>
          <p>Total: $ {this.props.totalPrice}</p>
          <div className={this.props.className}>
            {this.props.cart.map((roll) => 
              {
                console.log(roll)
                return (
                    <div>
                      <img src={roll.imageURL} className="roll-picture cart-image" alt={`a ${roll.rollName}`} />
                      <div>{roll.name}</div>
                      <div>Glazing: {roll.glaze}</div>
                      <div>Pack size: {roll.pack}</div>
                      <div>${roll.price}</div>
                      <button type="button" onClick={() => this.props.removeFromCart(roll.rollIndex)}> Remove </button>
                    </div>
                  )
              })
            }
          </div>
          <hr/>
          
        </div>
      
    );
  }
}

export default Cart;