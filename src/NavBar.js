import React, { Component } from 'react';
import './NavBar.css';
import logo from './logo/logo-01.svg';
import Cart from './Cart';


class NavBar extends Component {
  render() {
    return (
        <header>
        <img className="logo" src={logo} alt="logo of the bun bun bake shop which is a doodle of a cinammon roll"/>
        <div className="navbar">
          <div>
            <a>PRODUCTS </a>
            <b className="navbar-cart">CART</b>
          </div>
          <div id="cart-status">
            <p>{this.props.itemCount} item</p>
            <p>Total: $ {this.props.totalPrice}</p>
          </div>
          <hr/>
          <p className="tagline">Our hand-made cinnamon rolls</p>
          <Cart
              cartRoll= {this.props.cartRoll}
            />
        </div>
      </header>
      
    );
  }
}

export default NavBar;