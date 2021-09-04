import React from 'react'
import {Heading} from '../../components/heading'
import {Container} from '../../containers'
import { useRecoilValue } from 'recoil'
import { textState } from '../../../context/atoms/tokens'
export const HomePage = () => {
  const token = useRecoilValue(textState)

  return (
    <Container>
      <Heading hackaton={true} login={!token.access_token} dashboard={!!token.access_token}/>
    </Container>
  )
}
