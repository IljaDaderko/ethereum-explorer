import Document, { DocumentContext } from 'next/document';
import React, { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

class CoreDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = function() {
        return originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      };

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}

export default CoreDocument;
