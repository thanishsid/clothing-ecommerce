import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const homeRedir = (
    <motion.Fragment exit='undefined'>
      <Redirect to='/' />
    </motion.Fragment>
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className='hideOverflow'>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? homeRedir : <SignIn />)}
          />
          <Route
            exact
            path='/signup'
            render={() => (currentUser ? homeRedir : <SignUp />)}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
