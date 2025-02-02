'use client';

import React from 'react';
import PaginaHome from './PaginaHome/PaginaHome';
import style from "./PaginaDeCadastro/page.module.css"
import { useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { ApiURL } from 'src/app/utils/config.tsx';

const HomePage = async () => {
  const cookiesStored = await cookies()
  const token = cookiesStored.get('restaurant-token')
  const res = await fetch('${ApiURL}/usuario', {
    method: 'GET', 
    headers: {'Authorization' : `Bearer: ${token}`}
  })
}

const data = await res.json()
const user = data.usuario
console.log(user)


export default function HomePage() {

  const router = useRouter()


  return (
    <div className={style.btnhover}>
      <PaginaHome />
    </div>
  );
}