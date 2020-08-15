import * as React from 'react'
import tw from 'twin.macro'
import { HtmrOptions } from 'htmr/src/types'

const headingsBase = tw`font-bold mt-6 mb-4 first:mt-0 last:mb-0 leading-tight`

const htmrTransform: HtmrOptions['transform'] = {
  h1: ({ children, ...rest }) => (
    <h1 css={[tw`text-4xl`, headingsBase]} {...rest}>
      {children}
    </h1>
  ),
  h2: ({ children, ...rest }) => (
    <h2 css={[tw`text-3xl`, headingsBase]} {...rest}>
      {children}
    </h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 css={[tw`text-2xl`, headingsBase]} {...rest}>
      {children}
    </h3>
  ),
  h4: ({ children, ...rest }) => (
    <h4 css={[tw`text-xl`, headingsBase]} {...rest}>
      {children}
    </h4>
  ),
  h5: ({ children, ...rest }) => (
    <h5 css={[tw`text-xl`, headingsBase]} {...rest}>
      {children}
    </h5>
  ),
  h6: ({ children, ...rest }) => (
    <h6 css={[tw`text-xl`, headingsBase]} {...rest}>
      {children}
    </h6>
  ),
  p: (props) => <p css={tw`mb-4 last:mb-0`} {...props} />,
  a: ({ children, ...rest }) => (
    <a css={tw`cursor-pointer text-blue-500 hover:text-blue-700 hover:underline`} {...rest}>
      {children}
    </a>
  ),
  pre: (props) => <pre css={tw`my-6`} {...props} />,
  img: ({ alt, src, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => <img css={tw`my-6`} alt={alt} src={src} {...rest} />,
  hr: (props) => <hr css={tw`my-6`} {...props} />
}

export default htmrTransform
