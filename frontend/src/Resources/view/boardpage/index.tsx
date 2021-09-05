import React from 'react'
import {  useRecoilValue } from 'recoil'
import { textState } from '../../../context/atoms/tokens'
import {Heading} from '../../components/heading'
import {Linker} from '../../components/EmailLinker'
import {Container} from '../../containers'


export const BoardPage = () => {
  const tokens = useRecoilValue(textState);
  
  return (
    <Container>
      <Heading hackaton={true} login={false} logout={true}/>
      <Linker discordId={tokens.discordId}/>
    </Container>
  )
}
