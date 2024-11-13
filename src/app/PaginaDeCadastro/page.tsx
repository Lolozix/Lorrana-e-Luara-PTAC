'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Usuario from "../Interfaces/usuario";
import style from "./page.module.css";

export default function Cadastrar() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    password: "",
  });

  const [erro, setErro] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario.nome || !usuario.email || !usuario.password) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }
    
    console.log("Usuário cadastrado:", usuario);
    router.push("/sucesso"); 
  };

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
