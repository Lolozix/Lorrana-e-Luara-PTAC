'use client';

import React from 'react';
import PaginaHome from './PaginaHome/PaginaHome';
import style from "./PaginaDeCadastro/page.module.css"


export default function HomePage() {
  return (
    <div className={style.btnhover}>
      <PaginaHome />
    </div>
  );
}