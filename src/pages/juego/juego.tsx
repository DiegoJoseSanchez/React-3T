import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddIcon from '@mui/icons-material/Add';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { ICategoria } from '../../firebase/categorias';
import { Eventos } from '../../firebase/categorias';
import { cargarprod, delproduct, getCategorias, newCategoria } from '../../firebase/firecategorias';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PublishIcon from '@mui/icons-material/Publish';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { newEvento, getEvento, delEvento, masEvento } from '../../firebase/2categoria';


export const Juego = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [eventos, setEventos] = useState<Eventos[]>([]);
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    getCategorias().then((res) => {
      console.log(...res);
      setCategorias([...res]);
    });
    getEvento().then((res) => {
      console.log(...res);
      setEventos([...res]);
    });
  }, []);

  const { register, handleSubmit } = useForm<ICategoria>();  
  const { register: registerEventos, handleSubmit: handleSubmitOtroEventos } = useForm<Eventos>();

  const onAddCategoria: SubmitHandler<ICategoria> = async (dataCategoria) => {
    console.log(dataCategoria);
    await newCategoria(dataCategoria);
    window.location.reload();
  };

  const onAddEventos: SubmitHandler<Eventos> = async (dataEventos) => {
    console.log(dataEventos);
    await newEvento(dataEventos);
    window.location.reload();
  }; 

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <>
     <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tabla de Jugadores" value="1" />
            <Tab label="Tabla de Eventos" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
    <main className='back'>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <TableContainer component={Paper} id='tabla'>
         <div className='orden'>
          <h1>
            Players and Honor
          </h1>
         <div className='hj'>
          <Button variant='contained' onClick={cargarprod}><PublishIcon/></Button>
          <Button component={NavLink} to="../Init"><ExitToAppIcon /></Button>
          <Button style={{ display: 'flex', justifyContent: 'end' }} onClick={handleToggleCollapse}>
              {isCollapsed ? <Fingerprint fontSize='large' /> : <Fingerprint />}
            </Button>
            <Dialog open={!isCollapsed} onClose={handleToggleCollapse}>
              <DialogTitle id="new-cat-dialog-title">Add Player</DialogTitle>
              <DialogContent>
                <form onSubmit={handleSubmit(onAddCategoria)} noValidate>
                  <TextField {...register('name')} id='nombre' label='Nick' type='text' sx={{ width: '60%' }} />
                  <TextField {...register('ap')} id='ap' label='Honor' type='text' sx={{ width: '40%' }} />
                  <TextField {...register('class')} id='class' label='Class' type='text' sx={{ width: '20%' }} />
                  <TextField {...register('country')} id='country' label='Country' type='text' sx={{ width: '20%' }} />
                  <TextField {...register('guild')} id='guild' label='Guild' type='text' sx={{ width: '60%' }} />
                  <TextField {...register('img')} id='img' label='URL' type='text' sx={{ width: '100%' }} />
                </form>
              </DialogContent>
              <DialogActions>
              <Button type='submit' variant="contained" onClick={handleSubmit(onAddCategoria)}>{<AddIcon />}</Button>
              </DialogActions>
            </Dialog>
            </div>
            </div> 
          <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: "white" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">IMG</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Nick</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Class</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Country</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Guild</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Honor</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">ID</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categorias.map((personaje) => (
                <TableRow
                  key={personaje.codigo}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" className='fotopro'>
                    <img style={{ width: "10vw", filter: "" }} src={personaje.img} />
                  </TableCell>
                  <TableCell align="center">{personaje.name}</TableCell>
                  <TableCell align="center">{personaje.class}</TableCell>
                  <TableCell align="center">{personaje.country}</TableCell>
                  <TableCell align="center">{personaje.guild}</TableCell>
                  <TableCell align="center">{personaje.ap}</TableCell>
                  <TableCell align="center">{personaje.codigo}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => personaje.codigo && delproduct(personaje.codigo)}>
                      {<BackspaceIcon />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      </main>
      </TabPanel>





      <TabPanel value="2">
      <main className='back'>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <TableContainer component={Paper} id='tabla'>
         <div className='orden'>
          <h1>
            Eventos
          </h1>
         <div className='hj'>
          <Button variant='contained' onClick={masEvento}><PublishIcon/></Button>
          <Button component={NavLink} to="../Init"><ExitToAppIcon /></Button>
          <Button style={{ display: 'flex', justifyContent: 'end' }} onClick={handleToggleCollapse}>
              {isCollapsed ? <Fingerprint fontSize='large' /> : <Fingerprint />}
            </Button>
            <Dialog open={!isCollapsed} onClose={handleToggleCollapse}>
              <DialogTitle id="new-cat-dialog-title">Añadir Eventos</DialogTitle>
              <DialogContent>
                <form onSubmit={handleSubmitOtroEventos(onAddEventos)} noValidate>
                  <TextField {...registerEventos('name')} id='nombre' label='Evento' type='text' sx={{ width: '20%' }} />
                  <TextField {...registerEventos('descripcion')} id='desc' label='Description' type='text' sx={{ width: '80%' }} />
                </form>
              </DialogContent>
              <DialogActions>
              <Button type='submit' variant="contained" onClick={handleSubmitOtroEventos(onAddEventos)}>{<AddIcon />}</Button>
              </DialogActions>
            </Dialog>
            </div>
            </div> 
          <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: "white" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Nombre</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Descripcion</TableCell>
                <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Delete</TableCell>
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
                    <Button onClick={() => eventos.codigo && delEvento(eventos.codigo)}>
                      {<BackspaceIcon />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      </main>
      </TabPanel>
      </TabContext>
    </Box>
    </>
  );
};

export default Juego;
