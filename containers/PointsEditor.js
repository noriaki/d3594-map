import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputPoints from '../components/InputPoints';

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
    x: this.props.x,
    y: this.props.y,
  }

  handleChange = axis => (event) => {
    const { value } = event.currentTarget;
    this.setState({ [axis]: value });
  }

  render = () => (
    <InputPoints
      x={this.state.x}
      y={this.state.y}
      onChange={this.handleChange} />
  )
}

export default PointsEditor;
