import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { useSelector } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
