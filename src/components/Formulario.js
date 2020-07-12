import React, { useState } from 'react';
import styled from '@emotion/styled'

    const Campo = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    `
    const Label = styled.label`
        flex:0 0 100px;
    `
    const Select = styled.select`
        display:block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #e1e1e1;
        -webkit-appearance: none;

        &:hover {
            cursor: pointer;
        }
    `
    const Radio = styled.input`
        margin: 0 1rem;

        &:hover {
            cursor: pointer;
        }
    `
    const Boton = styled.button`
        background-color: #00838f;
        font-size: 16px;
        width: 100%;
        text-transform: uppercase;
        padding: 1rem;
        color: white;
        border: none;
        font-weight:bold;
        margin-top: 2rem;
        transition: background-color .3s ease;

        &:hover {
            background-color: #26c6da;
            cursor: pointer;
        }
    `

    const Error = styled.div`
        background-color: red;
        color: white;
        padding: 1rem;
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
    `

    const Formulario = () => {

        const [ datos, guardarDatos ] = useState({
            marca:'',
            year:'',
            plan:''
        });

        const [ error, guardarError ] = useState(false);

        // extraer los valores del state
        const { marca, year, plan } = datos;

        // Leer los valores del form y colocarlos en el state
        const obtenerInformacion = e => {
            guardarDatos ({
            ...datos, 
            [e.target.name] : e.target.value 
        })
    }

    // cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if( marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        } 
        guardarError(false)

        // obtener la diferencia de años

        // por cada año hay que restar el 3%

        
    
    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            { error ? <Error>Todos los campos son obligatorios</Error>: null }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">- Seleccione -</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">- Seleccione -</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <Radio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerInformacion}
                /> Básico
                <Radio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={ plan === 'completo'}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>
            <Boton
                type="submit"
            >
            Cotizar
            </Boton>
        </form>
     );
}
 
export default Formulario;