'use client'

import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { parseCookies, setCookie } from "nookies";
import { ApiURL } from "../../../config";

//const login = () => {
  //const[email, setEmail]= useState()<string>('')
  //const[password, setPassword] = useState()<string>('') 
  
  //async function handleSign() {
    //e.preventDefault()
    //console.log(email, password)
  
    //const res = await fetch('http://localhost:3000/PaginaLogin', {
      //method: 'POST', 
      //body: JSON.stringify({email,password})
    //})

   //console.log(res)
   //const data = await res.json()
   //console.log(data)

//  }

//}

interface ResponseSignin {
  erro: boolean;
  mensagem: string;
  token?: string;
}

export default function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [erro, setError] = useState("");
  const router = useRouter();

  const trocaEmail = (novoEmail: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      email: novoEmail,
    }));
  };

  const trocaSenha = (novaSenha: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      password: novaSenha,
    }));
  };

  useEffect(() => {
    const { 'restaurant-token': token } = parseCookies();
    if (token) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ApiURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: usuario.email, password: usuario.password })
      });

      if (response) {
        const data: ResponseSignin = await response.json();
        const { erro, mensagem, token = '' } = data;

        if (erro) {
          setError(mensagem);
        } else {
          setCookie(undefined, 'restaurant-token', token, {
            maxAge: 60 * 60 * 1,
          });

          router.push('/');
        }
      }
    } catch (error) {
      console.log('Erro na requisição', error);
      setError("Ocorreu um erro ao fazer login. Tente novamente.");
    }
  };

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
              value={usuario.email}
           //   onChange = {e => setEmail(e.target.value)}
              onChange={(e) => trocaEmail(e.target.value)}
              required
            />
          </div>
          <div className={style.inputgroup}>
            <label htmlFor="senha" className={style.label}>Senha:</label>
            <input
              className={style.input}
              type="password"
              id="senha"
              value={usuario.password}
        //      onChange = {e => setPassword(e.target.value)}
              onChange={(e) => trocaSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={style.btn}>Entrar</button>
        </form>
      </div>
    </div>
  );
}
