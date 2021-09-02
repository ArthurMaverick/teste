import React from 'react'
import { fetchJson } from '../../../services/fetch'
import { Container } from './styles'

export const SendForm = () => {
  const [title, setTitle] = React.useState<string>('')
  const [images, setImage] = React.useState<string[]>([])
  const [categories, setCategory] = React.useState<string[]>([])
  const [body, setBody] = React.useState<string>('')
  const [res, setRes] = React.useState<any>(undefined) 

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
    const option: RequestInit = {
      method: 'POST',
      body: JSON.stringify({
        title, 
        body,
        images, 
        categories,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    };
    
  setRes(await fetchJson('http://localhost:8000/v1/form', option).then(data => JSON.stringify(data))); // params it'll change

  }
  
  // some labels will to change to a generic and personalized mode
  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titulo:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  id="title"/>
      
          <label htmlFor="images">Imagens:</label>
          <input type="text" value={images} onChange={(e) => setImage([e.target.value])}  id="images"/>
        
          <label htmlFor="category">Categoria:</label>
          <input type="text" value={categories} onChange={(e) => setCategory([e.target.value])} id="category"/>

          <label htmlFor="subject">Conteúdo:</label>
          <textarea id="subject"  name="subject"  value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write something.." style={{height:'200px'}}></textarea>
      
          <input type="submit" value="Enviar"/>
        </form>
        <span>{
        res === undefined
        ? ''
        : res
          ? 'seu artigo foi enviado com sucesso!'
          : 'nao foi possivel enviar seu artigo'
      }</span>
    </Container>
  )
}