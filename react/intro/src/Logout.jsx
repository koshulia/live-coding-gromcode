import React from 'react';

const Logout = props => (
  <button className="logout btn" onClick={props.onLogout}>
    Logout
  </button>
);
export default Logout;
