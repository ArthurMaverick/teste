import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import {BoardPage} from '../Resources/view/boardpage'
import {JWTDecoder} from '../services/JWTdecode'

import { useSetRecoilState } from 'recoil'
import { textState } from '../context/atoms/tokens'
import { useRouter } from 'next/dist/client/router'

type AGRS = { 
  props: string
}

export default function Dashboard({props=''}: AGRS) {
  const [userInfo, setUserInfo] = useState(JWTDecoder(props))
  const setTokens = useSetRecoilState(textState);
  
  useEffect(()=>{
   
      const keysAndJWT = {...userInfo, props}
      setTokens(keysAndJWT) ,[props, setTokens, userInfo]
    
    })

    const value = useRouter()
    if (value.query.p = '') {
      return <h1>nao pode</h1>
    }
  

  
  
  return (
    <>
    <BoardPage />
  </> 
  ) 
}


export const getServerSideProps: GetServerSideProps = async(ctx) => {
  console.log(ctx)
  if (ctx.query.p === 'logout') {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }
  if (ctx.query.p === 'logout') {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }
  return { 
    props: {props: ctx.query.p },
  }
}

