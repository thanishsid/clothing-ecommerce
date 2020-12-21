import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingIcon className='shopping-icon pop' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
