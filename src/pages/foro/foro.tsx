import './foro.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICategoria } from '../../firebase/categorias';
import React, { useEffect, useState } from 'react'
import { cargarprod, getCategorias, newCategoria } from '../../firebase/firecategorias';
import { CardActionArea, Grid } from '@mui/material';


export const Foro = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])

     useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
    return (
      <main className='rank'>
        
         <Grid container style={{display: "flex", justifyContent: "center", margin: "10px 0px", padding: "10px"}}>
      {categorias.map((categorias) => {
        return(
          <Card sx={{ maxWidth: 400, margin: "10px 30px", with: "150px",}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={categorias.img}
              alt=""
              style={{ width: '200px', height: '200px'}}
            />
            <CardContent>
              <h5>Nick:</h5>
              <Typography gutterBottom variant="h5" component="div">
                {categorias.name} 
              </Typography>
              <h5>Honor:</h5>
              <Typography variant="body2" color="text.secondary">
                {categorias.ap}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small">Información</Button>
          
          </CardActions>
        </Card>
        )
      }

      )}
    </Grid>
   
      </main>
     

    )
}

