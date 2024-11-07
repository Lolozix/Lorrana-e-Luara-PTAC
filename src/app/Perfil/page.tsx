'use client'
import { useState } from "react";
import Usuario from "../Interfaces/usuario";
import Style from "src/app/Perfil/pageP.module.css"

const Perfil = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "Lorrana e Luara",
    idade: 17, 
  });

  return (
    <div className="perfil-container">
      <div className="informacoes">
        <h1 className="titulo">Perfil do Usuário</h1>
        <p>Nome: {usuario.nome}</p>
        <p>Idade: {usuario.idade}</p>
      </div>
    </div>
  );
};

export default Perfil;