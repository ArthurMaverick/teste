import React from 'react'
import {Heading} from '../../components/heading'
import {SendForm} from '../../components/sendFrom'
import {Container} from '../../containers'

import { useRecoilValue } from 'recoil';
import { textState } from '../../../context/atoms/tokens';
export const HackatonPage = () => {
  const todoList = useRecoilValue(textState);
  return (
    <Container>
      <Heading hackaton={false} login={true} logout={false}/>
      <h1>{todoList.code}</h1>
      <SendForm/>
    </Container>
  )
}
