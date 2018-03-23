import React, { Fragment } from 'react';

const InputPoints = ({ x, y, onChange }) => (
  <Fragment>
    <input
      type="number"
      value={x}
      id="x"
      name="x"
      onChange={onChange('x')} />
    <input
      type="number"
      value={y}
      id="y"
      name="y"
      onChange={onChange('y')} />
  </Fragment>
);

export default InputPoints;
