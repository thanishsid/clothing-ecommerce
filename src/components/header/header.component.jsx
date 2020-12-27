import React from 'react';
import './header.styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartDropdownState = useSelector(selectCartHidden);

  return (
    <div className='header'>
      <NavLink className='logo-container' to='/'>
        <motion.div
          whileHover={{
            scale: 1.2,
            rotateZ: 360,
            rotateY: -360,
            transition: { duration: 1 },
          }}
        >
          <Logo className='main-logo' />
        </motion.div>
      </NavLink>

      <div className='options'>
        <NavLink className='option' to='/shop'>
          SHOP
        </NavLink>
        <NavLink className='option' to='/contact'>
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className='option' to='/signin'>
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {!cartDropdownState && <CartDropDown />}
    </div>
  );
};

export default Header;
