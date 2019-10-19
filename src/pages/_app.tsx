import App from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import Layout from '../components/Layout';
import { darkTheme } from '../util/theme';

class CoreApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={darkTheme}>
        <Fragment>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default CoreApp;
