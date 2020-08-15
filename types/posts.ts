export type PostCategories = 'article' | 'note'

export interface PostMetadata {
  category: PostCategories
  title: string
  date: string
  slug: string
  lead?: string
  header_image?: string
}

export interface BasePostProps extends PostMetadata {
  content: string
}
