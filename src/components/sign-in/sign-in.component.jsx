import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

const SignIn = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setData({ ...data, email: '', password: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
