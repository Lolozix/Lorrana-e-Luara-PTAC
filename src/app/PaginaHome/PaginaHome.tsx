'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PaginaHome = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/PaginaDeCadastro');
  };

  return (
    <div style={styles.container}>
      <div style={styles.fundinho}>
        <button
          onClick={handleRedirect}
          style={styles.botao}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          Cadastrar-se
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f4f7fa',
    fontFamily: '"Roboto", sans-serif',
  },
  fundinho:{
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '500px',
    background: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
  },
  titulo: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  botao: {
    padding: '12px 24px',
    fontSize: '1.25rem',
    backgroundColor: '#008080',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    height: '50px',
    width: '300px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
    outline: 'none',
  },
  botaoHover: {
    backgroundColor: '#005bb5',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
  },
};

const handleHover = (e) => {
  const button = e.target;
  button.style.backgroundColor = button.style.backgroundColor === 'rgb(0, 91, 181)' ? '#008080' : '#005bb5';
  button.style.transform = button.style.transform === 'scale(1.05)' ? 'scale(1)' : 'scale(1.05)';
  button.style.boxShadow = button.style.boxShadow === '0 6px 10px rgba(0, 0, 0, 0.2)' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 6px 10px rgba(0, 0, 0, 0.2)';
};

export default PaginaHome;
