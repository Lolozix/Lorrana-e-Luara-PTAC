'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Botao from '../Components/Botao';
import style from './page.module.css';

const PaginaHome = () => {
  const [user, setUser] = useState(true);
  const router = useRouter();

  // Debug: Verificar as classes importadas
  console.log(style);  // Adicione isso para verificar as classes importadas

  if (user) {
    return (
      <div className={style.container}>
        <div className={style.buttonscontainer}>
          <h1 className={style.title}>Bem-vindo!</h1>
          <Botao 
            titulo="Fazer login"
            className={style.btn}
            botao={() => router.push('/PaginaLogin')}
          />
          <Botao
            titulo="Fazer cadastro"
            botao={() => router.push('/PaginaDeCadastro')}
            className={style.btn}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default PaginaHome;
