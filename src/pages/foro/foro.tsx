import './foro.css';
import { ICategoria } from '../../firebase/categorias';
import React, { useEffect, useState } from 'react';
import { cargarprod, getCategorias, newCategoria } from '../../firebase/firecategorias';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

interface ForoProps {}

export const Foro: React.FC<ForoProps> = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  useEffect(() => {
    getCategorias().then((res) => {
      console.log(...res);
      setCategorias([...res]);
    });
  }, []);

  const handleToggleCollapse = (index: number) => {
    setOpenDialogIndex(index === openDialogIndex ? null : index);
  };

  return (
    <main className='rank'>
      <Grid container style={{ display: 'flex', justifyContent: 'center', margin: '10px 0px', padding: '10px' }}>
        {categorias.map((categoria, index) => (
          <Card key={categoria.codigo} sx={{ maxWidth: 400, margin: '10px 30px', width: '210px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={categoria.img}
                alt=''
                style={{ width: '200px', height: '200px' }}
              />
              <CardContent>
                <h5>Nick:</h5>
                <Typography gutterBottom variant='h5' component='div'>
                  {categoria.name}
                </Typography>
                <h5>Honor:</h5>
                <Typography variant='body2' color='text.secondary'>
                  {categoria.ap}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={() => handleToggleCollapse(index)}>Información</Button>
              <Dialog open={openDialogIndex === index} onClose={() => handleToggleCollapse(index)}>
                <DialogTitle id='new-cat-dialog-title'>Información</DialogTitle>
                <DialogContent>
                  <Typography gutterBottom variant='h5' component='div'>Nombre:&nbsp;
                    { categoria.name}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>Honor:&nbsp;
                    { categoria.ap}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>Clase:&nbsp;
                    { categoria.class}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>Country:&nbsp;
                    { categoria.country}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>Gremio:&nbsp;
                    {categoria.guild}
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => handleToggleCollapse(index)}>Cerrar</Button>
                </DialogActions>
              </Dialog>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </main>
  );
};
