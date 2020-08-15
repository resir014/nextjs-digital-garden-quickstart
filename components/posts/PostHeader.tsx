import * as React from 'react'
import tw from 'twin.macro'
import relativeTime from '~/lib/relativeTime'

interface PostHeaderProps {
  title: string
  date?: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, date }) => {
  return (
    <header css={tw`px-4 pt-12 pb-4`}>
      <div css={tw`max-w-3xl mx-auto`}>
        <h1 css={tw`text-4xl lg:text-5xl font-bold mb-4 leading-tight`}>{title}</h1>
        {date && (
          <time dateTime={date} css={tw`block lg:text-xl`}>
            {relativeTime(new Date(date))}
          </time>
        )}
      </div>
    </header>
  )
}

export default PostHeader
