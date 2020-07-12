import React from 'react';
import Header from './components/Header'
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
  return (
    <Contenedor>
      <Header
        titulo={'Cotizador de seguros'}
      />
      <ContenedorForm>
        <Formulario></Formulario>
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
