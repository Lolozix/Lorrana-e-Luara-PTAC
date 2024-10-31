'use client';

import { useState } from "react";
import style from "../styles/cadastro.module.css";

export default function PaginaDeCadrastro() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Cadrastro</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.inputGroup}>
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
