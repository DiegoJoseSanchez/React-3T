import React from 'react';
import './inicio.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const Inicio = () => {
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
      <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Manteinance'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Mantenimiento 05/07/23
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Hora feliz (+100%) - Piedras luna'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Eventos 05/24/23
                </Typography>
                {' - ¡Aprovecha, que las piedras de luna están de oferta!'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Bendicion de Leya'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Evento 05/24/23
                </Typography>
                {' - Evento de mejora (+250%)'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Bendicion de Leya'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Evento 05/24/23
                </Typography>
                {' - Evento de mejora (+250%)'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Bendicion de Leya'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Evento 05/24/23
                </Typography>
                {' - Evento de mejora (+250%)'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Bendicion de Leya'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Evento 05/24/23
                </Typography>
                {' - Evento de mejora (+250%)'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Bendicion de Leya'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Evento 05/24/23
                </Typography>
                {' - Evento de mejora (+250%)'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Bendicion de Leya'
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  Evento 05/24/23
                </Typography>
                {' - Evento de mejora (+250%)'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </section>
  );
};
