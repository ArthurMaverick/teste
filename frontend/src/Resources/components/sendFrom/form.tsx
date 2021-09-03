import React, { useEffect } from 'react'
import { fetchJson } from '../../../services/fetch'
import { Container } from './styles'
export const SendForm = () => {
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [birthData, setBirthData] = React.useState<string>('')
  const [state, setstd] = React.useState<string>('')
  const [city, setCity] = React.useState<string>('')
  const [res, setRes] = React.useState<any>(undefined) 

  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
     const option: RequestInit = {
      method: 'POST',
      body: JSON.stringify({
        name, 
        email,
        birthData, 
        state,
        city
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    setRes(await fetchJson('http://localhost:8000/v1/hackaton/sendForm', option).then(data => JSON.stringify(data)));  
  };
  

  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Nome">Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  id="title"/>
      
          <label htmlFor="E-mail">E-mail:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  id="images"/>
        
          <label htmlFor="Data de Nascimento">Data de Nascimento:</label>
          <input type="text" value={birthData} onChange={(e) => setBirthData(e.target.value)} id="category"/>

          <label htmlFor="Cidade">Cidade:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="category"/>

          <label htmlFor="Estado">Estado:</label>
          <input type="text" value={state} onChange={(e) => setstd(e.target.value)} id="category"/>

          
          
          <input type="submit" value="Enviar"/>
        </form>
        <span>{
          res
        // res === undefined
        // ? ''
        // : res
        //   ? 'seu artigo foi enviado com sucesso!'
        //   : 'nao foi possivel enviar seu artigo'
      }</span>
    </Container>
  )
}