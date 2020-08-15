import * as React from 'react'
import Link from 'next/link'
import { NextPage, InferGetStaticPropsType } from 'next'
import tw from 'twin.macro'

import Page from '~/components/layout/Page'
import Navigation from '~/components/layout/Navigation'
import Content from '~/components/layout/Content'
import PostHeader from '~/components/posts/PostHeader'
import PostBody from '~/components/posts/PostBody'

import relativeTime from '~/lib/relativeTime'
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
      <PostHeader title="Hello world." />
      <PostBody>
        <ul css={tw`list-disc pl-6`}>
          {allPosts.map((post) => (
            <li key={post.slug}>
              <Link href="/posts/[...slug]" as={`/posts/${post.slug}/`}>
                <a css={tw`cursor-pointer text-blue-500 hover:text-blue-700 hover:underline`}>{post.title}</a>
              </Link>{' '}
              - {relativeTime(new Date(post.date))}
            </li>
          ))}
        </ul>
      </PostBody>
    </Content>
  </Page>
)

export default IndexPage
