import React from 'react'
import {Heading} from '../../components/heading'
import {SendForm} from '../../components/sendFrom'
import {Container} from '../../containers'
export const HackatonPage = () => {
  return (
    <Container>
      <Heading hackaton={false} login={true} logout={false}/>
      <SendForm/>
    </Container>
  )
}
