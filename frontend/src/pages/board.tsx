import { GetServerSideProps } from 'next'
import { useState } from 'react'
import {BoardPage} from '../Resources/view/boardpage'
import {JWTDecoder} from '../services/JWTdecode'


export default function Dashboard({props}: any) {
  const [userInfo, setUserInfo] = useState(JWTDecoder(props))
 
  return (
  <>
    <BoardPage/>
    <h1>olá usuario {userInfo.id}</h1>
  </> 
  ) 
}


export const getServerSideProps: GetServerSideProps = async({query}) => {
     return { 
       props: {props: query.p},
     }
   }
