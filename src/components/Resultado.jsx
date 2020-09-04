import React from 'react'

export const Resultado = ({cotizacion}) => {
    if(Object.keys(cotizacion).length === 0) return null;
    console.log(cotizacion);
    return (
        <div>
            <p>El precio es: <span>{cotizacion.PRICE}</span></p>
            <p>El precio mas alto del dia: <span>{cotizacion.HIGHDAY}</span></p>
            <p>El precio mas bajo del dia: <span>{cotizacion.LOWHOUR}</span></p>
            <p>Variacion ultimas 24 hrs: <span>{cotizacion.CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualizacion: <span>{cotizacion.LASTUPDATE}</span></p>
        </div>
    )
}
