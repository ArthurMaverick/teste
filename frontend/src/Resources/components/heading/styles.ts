import styled from 'styled-components'
import {theme } from '../../../styles'
type Theme = typeof theme

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;

  display: flexbox;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  font-size: 23px;
  color: white;
  background: black;

  

  nav ul {
    
    display: flexbox;
    flex-direction: row;
    li {
      padding:  0 10px;
     
    }
  }

`