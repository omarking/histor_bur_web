import React, { useEffect, useState } from 'react'
import { API_BC_TARJETA_CODWAY } from '../../../../utils/Constants';
import {EliminarTarjeta} from '../../../../utils/Admin/Tarjetas/Eliminar'
const FormularioTarjetas = () => {
    const [tarjetas, setTarjetas] = useState([]);
    useEffect(() => {
        const Token = document.cookie.replace('token=', '');
        fetch(`${API_BC_TARJETA_CODWAY}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': Token
            }
        }).then(res => res.json()).then((res) => {
            if (res.message) {

            } else {
                setTarjetas(res);
            }
        })
    })


    const eliminar = (id) => {
        const token = document.cookie.replace('token=', '');
        EliminarTarjeta(id, token);
    }



    return (
        <table class="table">
            <thead>
                <tr class="table-dark">
                    <td>No. Tarjeta</td>
                    <td>Nombre</td>
                    <td>Eliminar</td>
                </tr>
            </thead>
            <tbody>
                {tarjetas.map((tarjeta, index) => {
                    return (<tr key={index}>
                        <td className='text-center'>{tarjeta.noTarjeta}</td>
                        <td className='text-center'>{tarjeta.nombresPersona} {tarjeta.ApellidosPersonas}</td>
                        <td className='text-center'>
                            <button
                                className='btn btn-danger'
                                onClick={()=>eliminar(tarjeta.idTarjeta)}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default FormularioTarjetas