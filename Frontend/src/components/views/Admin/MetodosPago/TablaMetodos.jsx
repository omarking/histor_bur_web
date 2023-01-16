import React, { useEffect, useState } from 'react'
import { cambiarMetodo } from '../../../../utils/Admin/Metodos/cambiar';
import { eliminarMetodos } from '../../../../utils/Admin/Metodos/Eliminar';
import { API_BC_METODOS } from '../../../../utils/Constants';

const TablaMetodos = () => {
  const Token = document.cookie.replace('token=', '');
  const [metodos, setMetodos] = useState([])


  const cambiar = (status,metodo)=>{
    cambiarMetodo(
      metodo.idTipoPago,
      {
        name:metodo.nombrePago,
        status:status
      },
      Token)
  }

  const eliminar = (id)=>{
    eliminarMetodos(id,Token)
  } 





  useEffect(() => {
    fetch(API_BC_METODOS, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': Token
      }
    }).then(res => res.json()).then(res => {
      if (res.message) {

      } else {
        setMetodos(res);
      }
    })
  })




  return (
    <table class="table">
      <thead>
        <tr class="table-dark">
          <td>Metodo Pago</td>
          <td>Activar / desactivar</td>
          <td>Eliminar</td>
        </tr>
      </thead>
      <tbody>
        {metodos.map((metodo, index) => {
          return (<tr key={index}>
            <td className='text-center'>{metodo.nombrePago}</td>
            <td className='text-center'>
              {metodo.status === 1?
              (<button
                className='btn btn-danger'
              onClick={()=>cambiar(0,metodo)}
              >
                Desactivar
              </button>
              ):
              (
              <button
                className='btn btn-primary'
                onClick={()=>cambiar(1,metodo)}
              >
                Activar
              </button>
              )
                  }
            </td>
            <td className='text-center'>
              <button
                className='btn btn-danger'
              onClick={()=>eliminar(metodo.idTipoPago)}
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

export default TablaMetodos