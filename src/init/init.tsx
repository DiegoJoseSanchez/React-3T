import React from 'react'
import './init.css';

export const Init = () => {
    return (
        <main className='init'>
            <section id='init'>
            <div className="homepage">
      <header>
        <h1>Bienvenido al Juego Aventura Épica: 4story</h1>
        <p>¡Prepárate para embarcarte en una emocionante aventura llena de acción y misterio!</p>
      </header>
      <div className='if'>
        <section className="features">
          <div className="feature">
            <h2>Explora los mapas de mundo abierto</h2>
            <p>Sumérgete en paisajes exóticos, desde junglas misteriosas hasta ciudades futuristas. Descubre bugs ocultos y bichos perdidos en cada rincón del juego.</p>
          </div>
          <div className="feature">
            <h2>Combate contra el otro reino para ganar</h2>
            <p>Enfréntate a poderosos enemigos y juega en modo pvp gremio vs gremio. Domina habilidades especiales y utiliza estrategias inteligentes para derrotar a tus oponentes.</p>
          </div>
          <div className="feature">
            <h2>Personaliza tu personaje</h2>
            <p>Crea un héroe único, elige entre una amplia variedad de clases y personaliza su apariencia con armaduras, armas y accesorios. ¡Haz que tu personaje destaque en el juego!</p>
          </div>
        </section>
      </div>
      <footer>
        <p>Derechos de autor © 2023 4stafa. Todos los derechos reservados.</p>
      </footer>
    </div>
            </section>
         </main>
    )
}