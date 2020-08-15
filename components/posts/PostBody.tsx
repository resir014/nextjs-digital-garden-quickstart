import * as React from 'react'
import convert from 'htmr'

interface PostBodyProps {
  content: string
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return <div>{convert(content)}</div>
}

export default PostBody
