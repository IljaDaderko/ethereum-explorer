import { AnimatePresence } from 'framer-motion';
import App from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import Layout from '../components/Layout';
import { darkTheme } from '../util/theme';

class CoreApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ThemeProvider theme={darkTheme}>
        <Fragment>
          <GlobalStyles />
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default CoreApp;
