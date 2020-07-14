import React from 'react';
import styled from '@emotion/styled'

const Mensaje = styled.p`
    background-color: grey;
    color: white;
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;

`
const Cotizacion = styled.p`
    color: grey;
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin:0;
    font-weight:bold;

`

const Resultado = ({ cotizacion }) => {

    return (
        (cotizacion === 0) 
        ? <Mensaje> Elige marca, año y tipo de seguro </Mensaje> 
        : <Cotizacion> El total es: $ {cotizacion} </Cotizacion>
    )
}
 
export default Resultado;