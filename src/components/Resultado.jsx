import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
    color: #fff;
`;
const Info = styled.p`
    font-size:18px;

    span{
        font-weight:bold;
    }

`;

const Precio = styled.p`
    font-size:30px;

    span{
        font-weight:bold;
    }

`;

export const Resultado = ({cotizacion}) => {
    if(Object.keys(cotizacion).length === 0) return null;
    console.log(cotizacion);
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{cotizacion.PRICE}</span></Precio>
            <Info>El precio mas alto del dia: <span>{cotizacion.HIGHDAY}</span></Info>
            <Info>El precio mas bajo del dia: <span>{cotizacion.LOWHOUR}</span></Info>
            <Info>Variacion ultimas 24 hrs: <span>{cotizacion.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualizacion: <span>{cotizacion.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    )
}
