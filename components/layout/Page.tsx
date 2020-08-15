import * as React from 'react'
import Head from 'next/head'
import tw from 'twin.macro'

interface PageProps {
  title?: string
}

const Page: React.SFC<PageProps> = ({ children, title }) => (
  <div css={tw`flex flex-col min-h-screen overflow-x-hidden`}>
    <Head>
      <title>{title || 'Next.js TypeScript Quickstart'}</title>
    </Head>
    {children}
  </div>
)

export default Page
