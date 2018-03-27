import React, { Component } from 'react';

import calcDistance, { displayDistance } from '../libs/calcDistance';

import withMaterialUI from '../containers/withMaterialUI';
import PointsEditor from '../containers/PointsEditor';

class IndexPage extends Component {
  state = {
    distance: null,
    startPoint: { x: 750, y: 750 },
    endPoint: { x: 750, y: 750 },
  }

  handleUpdatePoint = startOrEnd => (newPoint) => {
    const { startPoint, endPoint } = this.state;
    let distance;
    if (startOrEnd === 'startPoint') {
      distance = calcDistance(newPoint, endPoint);
    } else if (startOrEnd === 'endPoint') {
      distance = calcDistance(startPoint, newPoint);
    }
    this.setState({
      distance,
      [startOrEnd]: newPoint,
    });
  }

  render = () => {
    const { distance, startPoint, endPoint } = this.state;
    return (
      <div>
        <h1>Index page</h1>
        <form>
          <PointsEditor
            id="startPoint"
            onUpdatePoint={this.handleUpdatePoint('startPoint')}
            x={startPoint.x}
            y={startPoint.y} />
          <PointsEditor
            id="endPoint"
            onUpdatePoint={this.handleUpdatePoint('endPoint')}
            x={endPoint.x}
            y={endPoint.y} />
        </form>
        <p>distance: { displayDistance(distance) }</p>
      </div>
    );
  }
}

export default withMaterialUI(IndexPage);
