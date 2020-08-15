import * as React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Error from 'next/error'

import { getPostBySlug, getAllPosts } from '~/lib/posts'
import markdownToHtml from '~/lib/markdownToHtml'

import Page from '~/components/layout/Page'
import Navigation from '~/components/layout/Navigation'
import Content from '~/components/layout/Content'
import PostBody from '~/components/posts/PostBody'
import { BasePostProps } from '~/types/posts'
import PostHeader from '~/components/posts/PostHeader'

type BlogPostPageProps = {
  post?: BasePostProps
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  if (post) {
    const { title, content, date } = post
    return (
      <Page title="About | Next.js TypeScript Quickstart">
        <Navigation />
        <Content>
          <PostHeader title={title} date={date} />
          <PostBody content={content} />
        </Content>
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
