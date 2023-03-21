import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  console.log('FORM DATA', formData);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // let password2 =
  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/jason',
        },
      };

      const body = JSON.stringify(newUser);

      const res = await axios.post('/api/users', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i class='fas fa-user'></i>Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={''}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' class='btn btn-primary' value='Login' />
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default Login;
