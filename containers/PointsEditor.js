import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

import extractPoint from '../libs/extractPoint';

class PointsEditor extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    onUpdatePoint: PropTypes.func,
  }
  static defaultProps = {
    x: 0,
    y: 0,
    onUpdatePoint: () => {},
  }
  state = {
    value: `(${this.props.x},${this.props.y})`,
  }

  handleChange = (event) => {
    const { value } = event.currentTarget;
    const point = extractPoint(value);
    this.setState({ value, point });
    if (point) { this.props.onUpdatePoint(point); }
  }

  render = () => (
    <FormControl>
      <InputLabel htmlFor={this.props.id}>座標(x,y)</InputLabel>
      <Input
        id={this.props.id}
        value={this.state.value}
        onChange={this.handleChange} />
      <p>
        { this.state.point && `${this.state.point.x},${this.state.point.y}` }
      </p>
    </FormControl>
  )
}

export default PointsEditor;
