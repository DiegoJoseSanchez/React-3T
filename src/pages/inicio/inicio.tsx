import './inicio.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Eventos } from '../../firebase/categorias';
import { getEvento } from '../../firebase/2categoria';
import { useEffect, useState } from 'react';


export const Inicio = () => {

  const [eventos, setEventos] = useState<Eventos[]>([]);

  useEffect(() => {
    getEvento().then((res) => {
      console.log(...res);
      setEventos([...res]);
    });
  }, []);

  function handleSubmitOtroEventos(onAddEventos: any): React.FormEventHandler<HTMLFormElement> | undefined {
    throw new Error('Function not implemented.');
  }

  function handleToggleCollapse(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section className='general'>
      <section id='titulo'>
        <h1 id='tit'>Eventos y Mantenimientos</h1>
        <p>
          Los eventos en un juego son acciones o situaciones específicas que ocurren dentro del juego y que involucran a los jugadores de alguna manera. Estos eventos pueden ser diseñados y programados por los desarrolladores del juego para agregar variedad, desafío y diversión a la experiencia de juego.
        </p>
        <br />
        <p>Aquí hay algunos aspectos importantes sobre los eventos en los juegos:</p>
        <br />
        <p>
          1. Tipos de eventos: Los eventos en los juegos pueden ser de diferentes tipos, como eventos de historia, eventos especiales, eventos competitivos, eventos cooperativos, eventos en tiempo real, eventos de temporada, etc. Cada tipo de evento tiene sus propias características y objetivos específicos.
        </p>
        <br />
        <p>
          2. Desencadenadores de eventos: Los eventos en los juegos pueden ser desencadenados por diferentes acciones o condiciones. Pueden activarse por tiempo, al completar una misión, al alcanzar un objetivo, al interactuar con un personaje o elemento específico, al llegar a un lugar específico en el juego, entre otros desencadenantes.
        </p>
        <br />
        <p>
          3. Recompensas y beneficios: Los eventos en los juegos a menudo ofrecen recompensas y beneficios especiales a los jugadores. Estas recompensas pueden incluir elementos únicos, monedas del juego, experiencia, desbloqueo de contenido adicional, bonificaciones de habilidades, mejoras de personajes, entre otros. Las recompensas brindan incentivos para participar en los eventos y pueden ayudar a los jugadores a progresar en el juego.
        </p>
      </section>
      <TableContainer component={Paper} id='tabla'>
         <div className='orden'>
          <h1>
            Eventos
          </h1>
         <div className='hj'>
            </div>
            </div> 
          <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: "white" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Nombre</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Descripcion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eventos.map((eventos) => (
                <TableRow
                  key={eventos.codigo}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell align="center">{eventos.name}</TableCell>
                  <TableCell align="center">{eventos.descripcion}</TableCell>
                  <TableCell align="center">
               
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </section>
  );
};
