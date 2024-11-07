'use client';

import { useState } from "react";
import style from "./page.module.css";

export default function PaginaDeCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cadastrar', {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Cadastro bem-sucedido');
      } else {
        console.log('Erro no cadastro');
      }
    } catch (error) {
      console.log('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.inputGroup}>
          <h1 className={style.title}>Cadastro</h1>
          <label className={style.label}>Digite seu e-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={style.input}
          />
        </div>
        <div className={style.inputGroup}>
          <label className={style.label}>Digite sua senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className={style.input}
          />
        </div>
        <button type="submit" className={style.submitButton}>Enviar</button>
      </form>
    </div>
  );
}
