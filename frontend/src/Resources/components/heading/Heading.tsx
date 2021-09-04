import React from 'react'
import { HeaderContainer } from './styles'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { textState } from '../../../context/atoms/tokens'


type HeadingProps<T=boolean> = {
  login?: T,
  logout?: T,
  hackaton?: T,
  dashboard?: T

}

export const Heading = (props: HeadingProps) => {
  const token = useRecoilValue(textState)
  return (
    <HeaderContainer>
    <div className="logo"><Link href="/">🌊 Test</Link></div>
    <nav>
      <ul>
        {props.hackaton && <li><Link href='/hackaton'>Hackaton</Link></li>}
        
       
        {props.login && <li><Link href='/api/redirect'>Login</Link></li>}
        {props.logout  && <li><Link href='http://localhost:8000/v1/any?log=logout'>logout</Link></li>}
         {props.dashboard && <li><Link href={`/board?p=${token.props}`} >Dashbord</Link></li>}

        
  
      </ul>
    </nav>
  </HeaderContainer>
  )
}
