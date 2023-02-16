import React from 'react';

// props: size

const Spinner = props => (
  <span className="spinner" style={{ width: props.size, height: props.size }}></span>
);
export default Spinner;
