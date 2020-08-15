import * as React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Error from 'next/error'

import { getPostBySlug, getAllPosts } from '~/lib/posts'
import markdownToHtml from '~/lib/markdownToHtml'

import Page from '~/components/Page'
import Navigation from '~/components/Navigation'
import Content from '~/components/Content'
import PostBody from '~/components/posts/PostBody'
import relativeTime from '~/utils/relativeTime'
import { BasePostProps } from '~/types/posts'

const lastUpdated = '2018-09-25T19:30:01+07:00'

type BlogPostPageProps = {
  post?: BasePostProps
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  if (post) {
    const { title, content } = post
    return (
      <Page title="About | Next.js TypeScript Quickstart">
        <Navigation />
        <Content>
          <h1 className="title">{title}</h1>
          <PostBody content={content} />
          <p>
            Last updated: <time dateTime={lastUpdated}>{relativeTime(new Date(lastUpdated))}</time> |{' '}
            <Link href="/" passHref>
              <a>Return home</a>
            </Link>
          </p>
        </Content>
        <style jsx>{`
          .title {
            margin-top: 0;
          }
        `}</style>
      </Page>
    )
  }

  return <Error statusCode={404} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (ctx.params && Array.isArray(ctx.params?.slug)) {
    const post = getPostBySlug(ctx.params.slug, ['category', 'title', 'lead', 'date', 'slug', 'content'])

    const content = await markdownToHtml(post.content || '')

    return {
      props: { post: { ...post, content } }
    }
  }

  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split('/').filter(Boolean)
        }
      }
    }),
    fallback: false
  }
}

export default BlogPostPage
