'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Botao from './Components/Botao';
import style from './PaginaHome/page.module.css'

const PaginaHome = () => {
  const [user, setUser] = useState(true);
  const router = useRouter();

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
