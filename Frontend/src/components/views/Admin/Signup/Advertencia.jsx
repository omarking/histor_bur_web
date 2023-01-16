import React from 'react'

const Advertencia = ({ok}) => {
    return (
        <div className='col-12  p-3 ps-5'>
            <p className='fs-5'>
                Antes de continuar al registro, lee y confirma que cumples las siguientes dos caracteristicas:
                <br />
            </p>
            <ol>
                <li className="fs-5">Tu nacionalidad es mexicana.</li>
                <li className="fs-5">El pais en donde resides es Mexico.</li>
            </ol>
            <p className='fs-5'>
                Si estas de acuedo presiona el siguiente botón para continuar:
            </p>
            <div className="col-12 d-flex justify-content-end">
                <button className='btn btn-primary col-2 p-2 ' onClick={()=>{ok(true)}}>
                    Aceptar y Continuar
                    <i className="bi bi-arrow-right-short">
                    </i>
                </button>
            </div>
        </div>
    )
}

export default Advertencia