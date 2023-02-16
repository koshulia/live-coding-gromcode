import React from 'react';

// input: obj(callback)
// output: jsx

const Login = props => (
  <button className="login btn" onClick={props.onLogin}>
    Login
  </button>
);
export default Login;
