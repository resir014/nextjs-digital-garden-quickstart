import * as React from 'react'
import Link from 'next/link'
import tw from 'twin.macro'

const navLinkStyles = tw`text-white mx-3 hover:underline focus:underline first:ml-0 last:mr-0 cursor-pointer`

const Navigation: React.SFC = () => (
  <header css={tw`flex flex-row px-4 py-2 bg-black text-white`}>
    <div css={tw`mr-6 select-none`}>▲</div>
    <nav css={tw`flex-auto`}>
      <Link href="/">
        <a css={navLinkStyles}>Home</a>
      </Link>
      <Link href="/about">
        <a css={navLinkStyles}>About</a>
      </Link>
    </nav>
  </header>
)

export default Navigation
