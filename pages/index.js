import React from 'react';

import PointsEditor from '../containers/PointsEditor';

const IndexPage = () => (
  <div>
    <h1>Index page</h1>
    <form>
      <PointsEditor x={750} y={750} />
    </form>
  </div>
);

export default IndexPage;
