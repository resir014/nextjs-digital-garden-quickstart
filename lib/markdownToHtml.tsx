import markdownit from 'markdown-it'
import * as shiki from 'shiki'

export default async function markdownToHtml(markdown: string) {
  const highlighter = await shiki.getHighlighter({ theme: 'dark-plus' })
  const md = markdownit({
    html: true,
    highlight: (code, lang) => {
      if (highlighter.codeToHtml) {
        return highlighter.codeToHtml(code, lang)
      }

      return code
    }
  })

  const result = md.render(markdown)
  return result
}
