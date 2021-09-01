import React from 'react'
import { HeaderContainer } from './styles'
export const Heading = () => {
  return (
    <HeaderContainer>
    <div className="logo">🌊 Test</div>
    <nav>
      <ul>
        <li><a href="#">Hackaton</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  </HeaderContainer>
  )
}
