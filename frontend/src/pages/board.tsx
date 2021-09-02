import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import {BoardPage} from '../Resources/view/boardpage'
import {JWTDecoder} from '../services/JWTdecode'
import {tokens} from '../context/atoms/tokens'


export default function Dashboard({props}: any) {
  const [userInfo, setUserInfo] = useState(JWTDecoder(props))
  const [token, setToken] = useRecoilState(tokens)
  
  useEffect(() => {
    ()=> setToken(token)
  }, [props, setToken, token]);
 


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
function useEffect( arg0: () => void, arg1: any[] ) {
  throw new Error( 'Function not implemented.' )
}

