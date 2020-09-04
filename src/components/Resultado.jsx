import React from 'react'

export const Resultado = ({cotizacion}) => {
    if(Object.keys(cotizacion).length === 0) return null;
    console.log(cotizacion);
    return (
        <div>
            <p>El precio es: <span>{cotizacion.PRICE}</span></p>
        </div>
    )
}
