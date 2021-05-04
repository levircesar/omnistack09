import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){

  const [email,setEmail]  = useState('');

  //event.target.value : pega o valor do evento do campo
  async function handleSubmit(event){
    event.preventDefault();
  
    //as informacoes vem de dentro de data
    const response = await api.post('/sessions' , { email });
    const {_id } = response.data;

    //armazenar id no localstorage do navegador
    localStorage.setItem('user' , _id);

    history.push('/dashboard');
  }
  return (
    <>
        <p>Ofereça <strong>spots</strong> para programadores e encontre 
          <strong> talentos </strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
    </>
  )
}