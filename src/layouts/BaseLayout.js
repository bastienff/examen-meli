import React from 'react';

import Breadcrumb from "../components/Breadcrumb"
import Header from "../components/Header"

import serialize from "serialize-javascript"

const BaseLayout = (props) => {

  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>MercadoLibre</title>
        <link rel="stylesheet" href="/css/main.css"></link>
      </head>

      <body>

        <div id="root">
          <Header {...props} />
          <main className="main">
            <Breadcrumb {...props} />
            {props.children}
          </main>
        </div>

        <script dangerouslySetInnerHTML={{
          __html:
            `window.__PRELOADED_STATE__ = ${serialize(props, { isJSON: true })};`
        }} />
        <script src="/js/main.js"></script>

      </body>
    </html>
  );
}

export default BaseLayout;
