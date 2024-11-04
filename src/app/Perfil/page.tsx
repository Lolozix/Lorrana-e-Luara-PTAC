'use client'
import { useState } from "react";
import Usuario from "../Interfaces/usuario";

const Perfil = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "Lorrana linda",
    idade: 17, 
  })

  return (
    <div>
      <p>Nome: {usuario.nome}</p>
      <p> Idade: {usuario.idade}</p>
    </div>
  )
};

export default Perfil;