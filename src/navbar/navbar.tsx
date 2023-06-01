import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link to='Init'>Inicio </Link>
        <Link to='Foro'> Jugadores </Link>
        <Link to='Ranking'>Ranking</Link>
        <Link to='Inicio'> Eventos </Link>
        <Link to='Cuenta'> Cuenta </Link>
      </nav>
    </>
  )
}
