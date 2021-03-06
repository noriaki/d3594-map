import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import getPageContext from '../styles/getPageContext';

const withMaterialUI = (BaseComponent) => {
  class WithMaterialUI extends Component {
    constructor(props, context) {
      super(props, context);
      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager} >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <BaseComponent {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  WithMaterialUI.propTypes = {
    /* eslint-disable react/forbid-prop-types, react/require-default-props */
    pageContext: PropTypes.object,
    /* eslint-enable react/forbid-prop-types, react/require-default-props */
  };

  WithMaterialUI.getInitialProps = ctx => (
    BaseComponent.getInitialProps != null ?
      BaseComponent.getInitialProps(ctx) : {}
  );

  return WithMaterialUI;
};

export default withMaterialUI;
