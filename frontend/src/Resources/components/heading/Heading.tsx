import React from 'react'
import { HeaderContainer } from './styles'
import Link from 'next/link'

type HeadingProps<T=boolean> = {
  login?: T,
  logout?: T,
  hackaton?: T,

}
export const Heading = (props: HeadingProps) => {
  return (
    <HeaderContainer>
    <div className="logo"><Link href="/">🌊 Test</Link></div>
    <nav>
      <ul>
        {props.hackaton && <li><Link href='/hackaton'>Hackaton</Link></li>}
        {props.login  && <li><Link href='/api/redirect'>Login</Link></li>}
        {props.logout  && <li><Link href='/api/redirect'>logout</Link></li>}  {/* //TODO */}
      </ul>
    </nav>
  </HeaderContainer>
  )
}
