import React, { useState } from 'react';
import Header from './components/Header'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Formulario from './components/Formulario'
import styled from '@emotion/styled'

const Contenedor = styled.section`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorForm = styled.section`
  background-color: white;
  padding: 3rem;
`

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  // Extraer los datos 

  const {datos, cotizacion} = resumen

  return (  
    <Contenedor>
      <Header
        titulo={'Cotizador de seguros'}
      />
      <ContenedorForm>
        <Formulario
          guardarResumen={guardarResumen}
        />
        <Resumen 
          datos={datos}
        />
        <Resultado
           cotizacion={cotizacion}
        />
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
