import React from 'react';
import ReactDOM from 'react-dom';
import Dashboards from '../../../lib/Dashboards';

const App = () => {
  return (
    <Dashboards
      container="#app"
      keenAnalysis={{
        config: {
          projectId: '5c162b27c9e77c0001f4d5dc',
          masterKey: '1E1E5887207EA22BEC926D79363159824ED31250E90F16AE24E2D0B0C1C30802',
          protocol: 'https',
          host: 'api.keen.io'
        }
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
