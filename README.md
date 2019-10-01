# Keen dashboard builder react component

<a href="https://keen.io/"><img src="https://img.shields.io/github/release/keen/react-dashboards.svg?style=flat-square&maxAge=600" alt=""></a>
<a href="https://github.com/keen/react-dashboards/graphs/contributors" alt="Contributors"><img src="https://img.shields.io/github/contributors/keen/react-dashboards.svg" /></a>
<a href="https://github.com/keen/react-dashboards/pulse" alt="Activity"><img src="https://img.shields.io/github/last-commit/keen/react-dashboards.svg" /></a>
<a href="#" alt="License"><img src="https://img.shields.io/github/license/keen/react-dashboards.svg" /></a>
<a href="http://slack.keen.io/"><img src="https://img.shields.io/badge/slack-keen-orange.svg?style=flat-square&maxAge=3600" alt="Slack"></a>
<a href="https://www.jsdelivr.com/package/npm/keen-react-dashboards"><img src="https://data.jsdelivr.com/v1/package/npm/keen-react-dashboards/badge" alt=""></a>
<a href="https://www.npmjs.com/package/keen-react-dashboards"><img src="https://img.shields.io/npm/dm/keen-react-dashboards.svg" alt=""></a>

## Install with NPM

```ssh
npm install keen-react-dashboards --save
```

## Usage

Use this component to use dashboard builder on Your website. All the configuration properties could be passed in props.

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboards from 'keen-react-dashboards';

const App = () => {
  return (
    <Dashboards
      container="#app" //required
      keenAnalysis={{
        config: {
          projectId: 'YOUR_PROJECT_ID',
          masterKey: 'YOUR_MASTER_KEY',
          protocol: 'https',
          host: 'api.keen.io'
        }
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
```