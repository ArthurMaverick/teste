import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { textState } from '../../../context/atoms/tokens'
import {Heading} from '../../components/heading'
import {Container} from '../../containers'


export const BoardPage = () => {
  // const [text, setText] = useRecoilState(textState);
  const todoList = useRecoilValue(textState);
  
  return (
    <Container>
      <Heading hackaton={true} login={false} logout={true}/>
      <div>
        <br />
        <h1>
          {todoList.access_token}
        </h1>
        <h1>
          {todoList.discordId}
        </h1>
      </div>
    </Container>
  )
}
