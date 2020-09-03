import React, { useEffect, useState } from 'react'
import useMoneda from "../hooks/useMoneda";
import axios from 'axios';
import styled from '@emotion/styled';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from  '../components/Error';

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

export const Form = ({setmoneda, setcriptomoneda}) => {

    const [listacripto, guardarListacripto] = useState([]);
    const [error, guardarError] = useState(false);

    const OPCIONES = [
        {codigo:"CLP", nombre:"Peso Chileno"},
        {codigo:"USD", nombre:"Dolar de estados unidos"},
        {codigo:"EUR", nombre:"Euro"},
        {codigo: "GBP",nombre:"Libra esterlina" },
    ]
    
    const [moneda, SelectMoneda] = useMoneda("Elige tu Moneda", "", OPCIONES);
    const [criptomoneda, SelectCriptomoneda] = useCriptomoneda("Selecciona la criptomoneda", "", listacripto);

    useEffect( () => {
        const consultarAPI = async() =>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const response = await axios.get(url);
            guardarListacripto(response.data.Data);
        }
        consultarAPI();
    },[]);


    // Al hacer submit
    const cotizarMoneda = (e) => {
        e.preventDefault();

        // Si no hay nada seleccionado
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        setmoneda(moneda);
        setcriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >   
            { error ? <Error mensaje ='Todos los campos son obligatorios.'/> : null}
            <SelectMoneda />
            <SelectCriptomoneda />
            <Boton 
                type="Submit"
                value="Calcular"
            />
        </form>
    )
}
