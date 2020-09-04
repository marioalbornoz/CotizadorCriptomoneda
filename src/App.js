import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from "./cryptomonedas.png";
import { Form } from './components/Form';
import axios from 'axios';
import { Resultado } from './components/Resultado';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 60px;
  margin-top: 50px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {

  const [moneda, setmoneda] = useState("");
  const [criptomoneda, setcriptomoneda] = useState("");
  const [cotizacion, setcotizacion] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async() => {
      if(moneda==='' || criptomoneda===''){
        return;
      }
      // consular a la API para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url)
      setcotizacion(resultado.data.DISPLAY[criptomoneda][moneda]);
      // console.log(resultado.data.DISPLAY);
    }
    cotizarCriptomoneda();
  }, [moneda, criptomoneda])

  return (
    <Contenedor>
      <div>
        <Imagen 
          src = {imagen}
          alt="imagen crypto"
        />
      </div>
      <div>
        <Heading>Cotizador de criptomonedas</Heading>
        <Form 
          setmoneda={setmoneda}
          setcriptomoneda={setcriptomoneda}
        />
        <Resultado 
          cotizacion={cotizacion}
        />
      </div>
      
    </Contenedor>
  );
}

export default App;
