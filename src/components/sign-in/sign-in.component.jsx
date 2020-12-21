import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { motion } from 'framer-motion';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { pageVariants, pageTransition } from '../../animation/animations';
import './sign-in.styles.scss';

const SignIn = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = data;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setData({ ...data, email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariants.squeezeIn}
      transition={pageTransition.opt2}
      className='sign-in'
    >
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form className='frm' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={data.email}
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={data.password}
          label='password'
          handleChange={handleChange}
          required
        />
        <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with Google
        </CustomButton>
      </form>
      <Link className='select' to='/signup'>
        Don't have an an account? Click here to register.
      </Link>
    </motion.div>
  );
};

export default SignIn;
