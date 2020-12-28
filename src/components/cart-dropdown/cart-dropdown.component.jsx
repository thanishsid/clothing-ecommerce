import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { useSelector, useDispatch } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import { useHistory } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  let history = useHistory();

  const handleClick = () => {
    dispatch(toggleCartDropdown());
    history.push('/checkout');
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
