import * as React from 'react'
import tw from 'twin.macro'

const Content: React.SFC = ({ children }) => <main css={tw`flex-auto`}>{children}</main>

export default Content
