'use client'

import { useState } from "react";
import { useRouter } from "next/router";
import Usuario from "../Interfaces/usuario";
import Botao from "../Components/Botao";

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

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
      <h2>Cadastro</h2>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={usuario.nome}
            onChange={(e) => trocaNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={usuario.email}
            onChange={(e) => trocaEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={usuario.password}
            onChange={(e) => trocaSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
