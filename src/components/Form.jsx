import React from 'react'
import useMoneda from "../hooks/useMoneda";
import styled from '@emotion/styled';

const Boton = styled.input`
    margin-top: 20px;
    font-weight:bold;
    font-size:20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width:100%;
    border-radius:10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color:#326AC0;
        cursor:pointer;
    }    
`;

export const Form = () => {

    const OPCIONES = [
        {codigo:"CLP", nombre:"Peso Chileno"},
        {codigo:"USD", nombre:"Dolar de estados unidos"},
        {codigo:"EUR", nombre:"Euro"},
        {codigo: "GBP",nombre:"Libra esterlina" },
    ]
    
    const [modenda, SelectMoneda, actualizarMoneda] = useMoneda("Elige tu Moneda", "", OPCIONES);
    return (
        <form>
            <SelectMoneda />
            <Boton 
                type="Submit"
                value="Calcular"
            />
        </form>
    )
}
