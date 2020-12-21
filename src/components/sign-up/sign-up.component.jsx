import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { motion } from 'framer-motion';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { NavLink } from 'react-router-dom';
import { pageVariants, pageTransition } from '../../animation/animations';
import './sign-up.styles.scss';

const SignUp = () => {
  const [data, setData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert('Passwords do not match !!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setData({
        ...data,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants.fadeIn}
      transition={pageTransition.opt1}
      className='sign-up'
    >
      <h2 className='title'>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form className='frm' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={data.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={data.email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={data.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
      <NavLink className='select' to='/signin'>
        Have an an account already? Click here to Sign in.
      </NavLink>
    </motion.div>
  );
};

export default SignUp;
