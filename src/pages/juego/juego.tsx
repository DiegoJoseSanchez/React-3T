import './juego.css';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
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
import { ICategoria } from '../../Interfaces/4s';
import { db, delproduct, getCategorias, newCategoria } from '../../firebase/firecategorias';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



export const Juego = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    getCategorias().then(res => {
      console.log(...res);
      setCategorias([...res]);
    });
  }, []);

  const { register, handleSubmit } = useForm<ICategoria>();

  const onAddCategoria = async (dataCategoria: ICategoria) => {
    console.log(dataCategoria);
    await newCategoria(dataCategoria);
    window.location.reload();
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  
  return (
    <>
    <main className='back'>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <TableContainer component={Paper} id='tabla'>
         <div className='orden'>
          <h1>
            Players and Honor
          </h1>
         <div className='hj'>
          <Button component={NavLink} to="../Cuenta"><ExitToAppIcon /></Button>
       
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
                <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>
                  {<AddIcon />}
                </Button>
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
    </>
  );
};

export default Juego;
