import React from 'react';
import PropTypes from 'prop-types';
import take from 'lodash.take';
import MaskedInput from 'react-text-mask';

import extractPoint from '../libs/extractPoint';

const PointInputs = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={inputRef}
    keepCharPositions
    showMask
    placeholderChar={'\u2000'}
    mask={createMask} />
);

PointInputs.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default PointInputs;

export const createMask = (input) => {
  let xLength = 0;
  let yLength = 0;
  const digitMasks = [/\d/, /\d/, /\d/, /\d/];
  const point = extractPoint(input);
  if (point !== null) {
    xLength = String(point.x).length;
    yLength = String(point.y).length;
  }
  return ['(']
    .concat(take(digitMasks, xLength))
    .concat(',')
    .concat(take(digitMasks, yLength))
    .concat(')');
};
