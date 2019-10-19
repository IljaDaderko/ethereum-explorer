import App from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import { darkTheme } from '../util/theme';

class CoreApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={darkTheme}>
        <Fragment>
          <GlobalStyles />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default CoreApp;
