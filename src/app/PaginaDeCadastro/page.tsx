'use client'

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Usuario from "../Interfaces/usuario";
import style from "./page.module.css";
import { parseCookies, setCookie } from "nookies";
import { ApiURL } from "../../../config";
import { error } from "console";


interface ResponseSignin {
  erro: boolean,
  mensagem: string,
  token?: string
}

export default function Cadastrar() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    password: "",
  });

  const [erro, setError] = useState("");
  const router = useRouter();

  const trocaNome = (novoNome: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      nome: novoNome,
    }));
  };

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
      const response = await fetch(`${ApiURL}/auth/cadastro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: usuario.nome, email: usuario.email, password: usuario.password })
      })
   
      
      
      if (response) {
        const data: ResponseSignin = await response.json()
        const { erro, mensagem, token = '' } = data;
        console.log(data)
        if (erro) {
          setError(mensagem)
        } else {

          setCookie(undefined, 'restaurant-token', token, {
            maxAge: 60 * 60 * 1
          })

          router.push('/')
        }
      } else {
      }
    }
    catch (error) {
      console.log('Erro na requisicao', error)
    }
  }


  return (
    <div className={style.container}>
      <div className={style.form}>
        <h2 className={style.title}>Cadastro</h2>
        {erro && <p className={style.error}>{erro}</p>}
        <form onSubmit={handleSubmit}>
          <div className={style.inputgroup}>
            <label htmlFor="nome" className={style.label}>Nome:</label>
            <input
              className={style.input}
              type="text"
              id="nome"
              value={usuario.nome}
              onChange={(e) => trocaNome(e.target.value)}
              required
            />
          </div>
          <div className={style.inputgroup}>
            <label htmlFor="email" className={style.label}>Email:</label>
            <input
              className={style.input}
              type="email"
              id="email"
              value={usuario.email}
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
              onChange={(e) => trocaSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={style.btn}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
