import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body className="bg-gradient-to-r from-purple-light to-cyan-light dark:from-purple-dark dark:to-cyan-dark dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
