import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'

import 'tailwindcss/dist/base.min.css'

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <CacheProvider value={cache}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next.js TypeScript Quickstart</title>
        </Head>
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
