import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DashboardBuilder } from 'keen-dashboard-builder';

export default class Dashboards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.createKeenDashboardBuilder();
  }

  createKeenDashboardBuilder() {
    this.dashboardBuilder = new DashboardBuilder({
      container: this.el,
      ...this.props
    });
  }

  handleRef = (el) => {
    if (el) {
      this.el = el;
      this.createKeenDashboardBuilder();
    }
  }

  render() {
    return <div ref={this.handleRef} />;
  }
}

Dashboards.propTypes = {
  container: PropTypes.string,
  keenAnalysis: PropTypes.shape({
    projectId: PropTypes.string,
    masterKey: PropTypes.string,
    protocol: PropTypes.string,
    host: PropTypes.string
  }),
  keenWebHost: PropTypes.string
};

Dashboards.defaultProps ={
  keenWebHost: 'keen.io',
  keenAnalysis: {
    protocol: 'https',
    host: 'api.keen.io'
  }
}
