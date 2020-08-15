import * as React from 'react'
import tw from 'twin.macro'
import { HtmrOptions } from 'htmr/src/types'

const htmrTransform: HtmrOptions['transform'] = {
  p: (props) => <p css={tw`mb-4 last:mb-0`} {...props} />,
  a: ({ children, ...rest }) => (
    <a css={tw`cursor-pointer text-blue-500 hover:text-blue-700 hover:underline`} {...rest}>
      {children}
    </a>
  ),
  hr: (props) => <hr css={tw`my-6`} {...props} />
}

export default htmrTransform
