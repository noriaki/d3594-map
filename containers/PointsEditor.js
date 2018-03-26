import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class PointsEditor extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
  }
  static defaultProps = {
    x: 0,
    y: 0,
  }
  state = {
    value: `(${this.props.x},${this.props.y})`,
  }

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ value });
  }

  render = () => (
    <FormControl>
      <InputLabel htmlFor="points">座標(x,y)</InputLabel>
      <Input
        id="points"
        value={this.state.value}
        onChange={this.handleChange} />
    </FormControl>
  )
}

export default PointsEditor;
