import React from 'react'

interface PageProps {
  htmlAttributes: object
  headComponents: {
    title: React.ReactNode
  }
  bodyAttributes: object
  preBodyComponents: []
  body: string
  postBodyComponents: []
}
export default function HTML(props: PageProps) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="renderer" content="webkit" />
        <meta content="yes" name="apple-touch-fullscreen" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover, shrink-to-fit=no"
        />
        <link rel="dns-prefetch" href="//static.wktrf.com"/>
        <title>页面加载中...</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          className="wrapper"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
