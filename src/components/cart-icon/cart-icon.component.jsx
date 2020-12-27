import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingIcon className='shopping-icon pop' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
