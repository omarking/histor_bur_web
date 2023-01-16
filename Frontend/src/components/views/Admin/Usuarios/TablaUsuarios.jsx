import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { API_BC_USER } from '../../../../utils/Constants';
import consultaBoreauPF from '../../../../utils/Moffin/boreauPF';
import { saveReport } from '../../../../utils/Moffin/saveDbMoffin';
import FormularioUsuario from './FormularioUsuario';



const TablaUsuarios = ({ usuarios, editar }) => {

    const Token = document.cookie.replace('token=', '');

    const [usuario, setUsuario] = useState(null);

    const eliminar = (id) => {


        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, continuar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            fetch(`${API_BC_USER}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': Token
                }
            }).then(res => res.json()).then(res => {
                if (res.message) {
                    Swal.fire(
                        'Error',
                        'No se pudo eliminar el usuario',
                        'error'
                    )
                } else {
                    if (res.delete) {
                        Swal.fire(
                            'Usuario Eliminado',
                            'El usuario se elimino correctamente',
                            'success'
                        )
                    }
                }
            }).catch((err) => {
                Swal.fire(
                    'Error',
                    'No se pudo eliminar el usuario',
                    'error'
                )
            })
        })





    }


    const generarReporte = (usuario) => {

        const obj = {
            birthdate: usuario.fechaNacimiento.split('T')[0],
            firstName: usuario.nombre.split(' ')[0],
            middleName: usuario.nombre.split(' ')[1] || null,
            firstLastName: usuario.primerApellido,
            secondLastName: usuario.segundoApellido,
            rfc: usuario.rfc,
            accountType: usuario.TipoCuenta,
            address: usuario.direccion,
            neighborhood: usuario.colonia,
            city: usuario.ciudad,
            municipality: usuario.region,
            state: usuario.estado,
            zipCode: usuario.codigoPostal,
            exteriorNumber: usuario.noExterior,
            country: usuario.pais,
            nationality: usuario.nacionalidad
        }

        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta acción no podras cancelarla despues de confirmada!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, continuar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(obj)
                consultaBoreauPF(obj, (err, res) => {
                    if (err) {
                        Swal.fire(
                            'Ocurrio un problema',
                            err.message,
                            'error'
                        )
                    } else {
                        res.CodigoRazon = res.CodigoRazon[0]
                        saveReport(usuario.idPersona, Token, res)
                    }
                })
            }
        })
    }


    return (
        <div className="col-7">

            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col" className='text-center'>Nombres</th>
                        <th scope="col" className='text-center'>Editar</th>
                        <th scope="col" className='text-center'>Eliminar</th>
                        <th scope="col" className='text-center'>Generar Reporte</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => {
                        return (
                            <tr key={index}>
                                <td className='text-center'>{usuario.nombre} {usuario.primerApellido} {usuario.segundoApellido}</td>
                                <td className='text-center'>
                                    <button className='btn btn-info' onClick={() => setUsuario(usuarios[0])}>
                                        <i className="bi bi-pencil-square"></i></button>
                                </td>
                                <td className='text-center'>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => eliminar(usuario.idPersona)}

                                    >
                                        <i className="bi bi-trash"></i></button>
                                </td>
                                <td className='text-center'>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => generarReporte(usuario)}
                                    >
                                        <i className="bi bi-file-bar-graph-fill"></i>
                                    </button>
                                </td>
                            </tr>)
                    })}

                </tbody>
            </table>
            { usuario?(<FormularioUsuario
                user={usuario}
                setUser={ setUsuario}
          />): null}

        </div>
    )
}

export default TablaUsuarios