import * as React from 'react'
import { NextPage } from 'next'

import Page from '~/components/layout/Page'
import Navigation from '~/components/layout/Navigation'
import Content from '~/components/layout/Content'
import PostHeader from '~/components/posts/PostHeader'
import PostBody from '~/components/posts/PostBody'

const AboutPage: NextPage = () => (
  <Page title="About | Next.js TypeScript Quickstart">
    <Navigation />
    <Content>
      <PostHeader title="About us." />
      <PostBody>
        <p>
          Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo sensus hilaretur. Nam, ut sint illa vendibiliora, haec
          uberiora certe sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers?
        </p>
      </PostBody>
    </Content>
  </Page>
)

export default AboutPage
