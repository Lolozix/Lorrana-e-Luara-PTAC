'use client';

import React from 'react';
import PaginaHome from './PaginaHome/PaginaHome';
import style from "./PaginaDeCadastro/page.module.css"
import { useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";




export default function HomePage() {

  const router = useRouter()


  return (
    <div className={style.btnhover}>
      <PaginaHome />
    </div>
  );
}