import React from 'react'
import './Signin.css';
import Button from 'react-bootstrap/Button';

export default function Signin() {
  return (
      <div className="signin">
          <h1>Radeepa distributors</h1>
          <h2>Sign in</h2>
          <label className='label'><b>User Name</b></label>
          <input type="text" placeholder="Enter User Name" /><br />
          <lable className='label'><b>Password</b></lable>
          <input type="password" placeholder="Enter Password" /><br />
          <Button variant="warning" style={{ backgroundColor: 'lightgray', color: 'black', border: '1px solid black', marginTop: '20px' }}><b>Login</b></Button><br/>
          <span>Forget your password? </span>
          <button style={{ backgroundColor: 'none', color: 'black', border: 'none', marginTop: '20px' }}><b>Sign up</b></button>
      </div>
  )
}
