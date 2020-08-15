import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), '_posts')

// Regex to parse date and title from the filename
const BLOG_POST_SLUG_REGEX = /^([\d]{4})-([\d]{2})-([\d]{2})-(.+)\.md$/

export function getPostPaths() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(paths: string[], fields: string[] = []): Record<string, any> {
  const [year, month, day, slug] = paths
  const actualSlug = `${year}-${month}-${day}-${slug}.md`
  const contents = fs.readFileSync(path.join(postsDirectory, actualSlug))
  const { data, content } = matter(contents)

  const items: Record<string, any> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = `${year}/${month}/${day}/${slug}`
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getPostParams(slug: string): string[] {
  const match = slug.match(BLOG_POST_SLUG_REGEX)

  if (match) {
    const [, year, month, day, actualSlug] = match
    return [year, month, day, actualSlug]
  }

  return []
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostPaths()
  const posts = slugs
    .map((slug) => getPostBySlug(getPostParams(slug), [...fields, 'date']))
    // sort posts by date in descending order
    .sort((post1, post2) => Date.parse(post2.date) - Date.parse(post1.date))
  return posts
}
