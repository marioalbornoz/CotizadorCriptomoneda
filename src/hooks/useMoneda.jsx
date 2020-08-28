import React, { Fragment, useState } from 'react'

const useMoneda = (label, stateInicial, opciones) => {
    // Definicion del state a usar
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={ e =>{ actualizarState(e.target.value)}}
                value={state}
            >
            <option value=""> - Seleccione</option>
                {opciones.map( (opcion)=> (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    )

    return [state, Seleccionar, actualizarState];
}

export default useMoneda;