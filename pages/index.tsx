import * as React from 'react'
import Link from 'next/link'
import { NextPage, InferGetStaticPropsType } from 'next'

import Page from '~/components/Page'
import Navigation from '~/components/Navigation'
import Content from '~/components/Content'
import relativeTime from '~/utils/relativeTime'
import { getAllPosts } from '~/lib/posts'

export const getStaticProps = async () => {
  const allPosts: Record<string, any>[] = getAllPosts(['title', 'slug', 'date'])

  return {
    props: { allPosts }
  }
}

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>

const IndexPage: NextPage<IndexPageProps> = ({ allPosts }) => (
  <Page>
    <Navigation />
    <Content>
      <h1 className="title">Hello world.</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href="/posts/[...slug]" as={`/posts/${post.slug}/`}>
              <a>{post.title}</a>
            </Link>{' '}
            - {relativeTime(new Date(post.date))}
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(allPosts, null, 2)}</pre>
    </Content>
    <style jsx>{`
      .title {
        margin-top: 0;
      }
    `}</style>
  </Page>
)

export default IndexPage
