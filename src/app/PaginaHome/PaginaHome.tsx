'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const PaginaHome = () => {
  const router = useRouter();

  // Função para redirecionar para a página de cadastro
  const handleRedirect = () => {
    router.push('/paginaCadastro'); // Redireciona para a rota /paginaCadastro
  };

  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <button onClick={handleRedirect} style={styles.botao}>
        Ir para o Cadastro
      </button>
    </div>
  );
};

const styles = {
  botao: {
    padding: '12px 12px',
    fontSize: '2rem',
    backgroundColor: '#008080',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  botaoHover: {
    backgroundColor: '#005bb5',
  },
};


export default PaginaHome;
