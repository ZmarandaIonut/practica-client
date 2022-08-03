import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './Register.module.scss';
import reusable from "../../../resources/css/Reusable.module.scss"


const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    matchPasswords: ""
  })

  const _handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }

    if (value.length) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const _validate = () => {
    let isValid = true;
    const tmpErrors = { ...errors };

    if (!username.length) {
      tmpErrors.username = 'Username cannot be empty!';
      isValid = false;
    }

    if (!email.length) {
      tmpErrors.email = 'Email cannot be empty!';
      isValid = false;
    }

    if (!password.length) {
      tmpErrors.password = 'Password cannot be empty!';
      isValid = false;
    }

    if (!confirmPassword.length) {
      tmpErrors.confirmPassword = 'Confirm password cannot be empty!';
      isValid = false;
    }

    if(confirmPassword !== password){
       tmpErrors.matchPasswords = 'Confirm passsword and password not match';
       isValid = false;
    }
    setErrors(tmpErrors);

    return isValid;
  }

  const _register = async () => {

    const isValid = _validate();

    if (!isValid) {
      return;
    }

    // make API REQUEST
    const payload = {
      email,
      password
    };
    

    // const res = await fetch('http://practica.local/api/login', {
    //   method: 'POST',
    //   headers: {
    //     "Accept": 'application/json',
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // })

    // console.log(res);

    navigate('/verify-email')
  }

  console.log(errors, errors.email.length);
  return (
    <section className={reusable.mainContainer}>
        <div className={reusable.containerContent}>
          <div className={reusable.formTitle}>
              <h1>Register</h1>
          </div>
          <div>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="input"
                placeholder="Enter username"
                value={username}
                isInvalid={errors.username.length}
                autoFocus={true}
                onChange={_handleChange} />
              {!!errors.username.length && <Form.Control.Feedback type='invalid'>
                {errors.username}
              </Form.Control.Feedback>}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                isInvalid={errors.email.length}
                onChange={_handleChange} />
              {!!errors.email.length && <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                isInvalid={errors.password.length}
                onChange={_handleChange} />
              {!!errors.password.length && <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                isInvalid={errors.confirmPassword.length}
                onChange={_handleChange} />
              {!!errors.confirmPassword.length && <Form.Control.Feedback type='invalid'>
                {errors.confirmPassword}
              </Form.Control.Feedback>}
            </Form.Group>
          </div>
          {!!errors.matchPasswords.length && <p className={classes.confirmPassErr}>{errors.matchPasswords}</p>}
          <div className={reusable.btnContainer}>
            <Button onClick={_register}>Register</Button>
          </div>
        </div>
    </section>
  )
}

export default Register