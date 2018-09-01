import React from 'react';
export default props => (
  <div className="form-check  form-check-inline">
    <input {...props} type="radio" name="radio" id="radio1" />
    <label>{props.number}</label>
  </div>
);
