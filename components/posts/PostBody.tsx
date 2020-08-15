import * as React from 'react'
import convert from 'htmr'
import tw from 'twin.macro'

import htmrTransform from '~/lib/htmrTransform'

interface PostBodyProps {
  content?: string
}

const PostBody: React.FC<PostBodyProps> = ({ content, children }) => {
  if (content) {
    return (
      <section css={tw`p-4 pb-12`}>
        <div css={tw`max-w-3xl mx-auto`}>{convert(content, { transform: htmrTransform })}</div>
      </section>
    )
  }

  return (
    <section css={tw`p-4 pb-12`}>
      <div css={tw`max-w-3xl mx-auto`}>{children}</div>
    </section>
  )
}

export default PostBody
