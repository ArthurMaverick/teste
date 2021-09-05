import React from 'react'
import { fetchJson } from '../../../services/fetch'
import { Container } from './style'

type LinkerProps = { 
  discordId: string
}
export const Linker = ({discordId}:LinkerProps) => { 
  const [email, setEmail] = React.useState<string>('')
  const [toogle, setToggle] = React.useState<boolean>(false)
  const [res, setRes] = React.useState<any>(undefined) 

  const handleSubmit = async (e: React.FormEvent) => {
    
     e.preventDefault()
     const option: RequestInit = {
      method: 'POST',
      body: JSON.stringify({email, discordId: discordId}),

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    setRes(await fetchJson('http://localhost:8000/v1/linker/discord', option).then(data => JSON.stringify(data)));  
  };
  

  return (
    <Container>
      <div className="email">
        <button onClick={() => setToggle(!toogle)}>linkar com inscriçao do hackaton</button>
        </div>
        {
          toogle &&
        <form onSubmit={handleSubmit}>
          <label htmlFor="E-mail" >E-mail:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  id="images"/>
          <input type="submit" value="Enviar"/>
        </form>
}
        <span>{
        res === undefined
        ? ''
        : res
          ? 'discord sincronizado com discord sua inscriçao no hackaton'
          : 'nao foi possivel sincronizar com o discord'
      }</span>
    </Container>
  )
}