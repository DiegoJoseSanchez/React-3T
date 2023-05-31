import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Inicio } from './pages/inicio/inicio';
import { Foro } from './pages/foro/foro';
import { Juego } from './pages/juego/juego';
import { Cuenta } from './pages/cuenta/cuenta';
import { NavBar } from './navbar/navbar';
import { Init } from './init/init';
import { InlayHintKind } from 'typescript';


export const App = () => {
    return (
        <>
            <header><NavBar/></header>
             <Routes>
               
                    <Route path='/' element={<Init />} /> 
                    <Route path='/Inicio' element={<Inicio />} />
                    <Route path='/Juego' element={<Juego />} />
                    <Route path='/Foro' element={<Foro />} />
                    <Route path='/Cuenta' element={<Cuenta />} />
                    <Route path='/Init' element={<Init />} />
            </Routes> 
        </>
    )
}
export default App;