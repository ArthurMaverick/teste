import React from 'react'
import {Heading} from '../../components/heading'
import {Container} from '../../containers'
export const BoardPage = () => {
  return (
    <Container>
      <Heading hackaton={true} login={false} logout={true}/>
    </Container>
  )
}
