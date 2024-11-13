'use client'

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { setCookie, parseCookies } from 'nookies'; 
import { ApiURL } from "../../../config";


interface ResponseSignin {
    erro: boolean,
    mensagem: string,
    token?: string 
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setError] = useState("");
  const router = useRouter();


  useEffect(() => {
    const { 'restaurant-token': token } = parseCookies();
    if (token) {
      router.push('/');
    }
  }, [router]);

  const  handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
    try {
     const response = await fetch(`${ApiURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({email, password})
     })
      if (response){
        const data : ResponseSignin = await response.json()
        const {erro, mensagem, token = ''} = data;
        console.log(data)
        if (erro){
          setError(mensagem)
        } else {
   
          setCookie(undefined, 'restaurant-token', token, {
            maxAge: 60*60*1 // 1 hora
          } )

          router.push('/')

        }
      } else {

      }
  } 
    catch (error) {
    console.error('Erro na requisicao', error)
  }
}


  return (
    <div className={style.container}>
      <div className={style.form}>
        <h2 className={style.title}>Login</h2>
        {erro && <p className={style.error}>{erro}</p>}
        <form onSubmit={handleSubmit}>
          
          <div className={style.inputgroup}>
            <label htmlFor="email" className={style.label}>Email:</label>
            <input
              className={style.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={style.inputgroup}>
            <label htmlFor="senha" className={style.label}>Senha:</label>
            <input
              className={style.input}
              type="password"
              id="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={style.btn}>Login</button>
        </form>
      </div>
    </div>
  );
}
