'use client';

import React, { useEffect } from 'react';
import PaginaHome from './PaginaHome/PaginaHome';
import style from "./PaginaDeCadastro/page.module.css";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { ApiURL } from './utils/config';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const cookiesStored = parseCookies();
        const token = cookiesStored['restaurant-token'];
        
        if (!token) {
          console.error("Token não encontrado!");
          return;
        }

        const res = await fetch(`${ApiURL}/usuario`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!res.ok) {
          console.error("Erro ao buscar usuário:", res.statusText);
          return;
        }

        const data = await res.json();
        setUser(data.usuario);
        console.log(data.usuario);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={style.btnhover}>
      <PaginaHome />
    </div>
  );
}
