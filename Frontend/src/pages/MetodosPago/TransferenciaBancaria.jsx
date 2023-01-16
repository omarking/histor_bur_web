import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import { API_BC_TARJETA_CODWAY } from '../../utils/Constants'

const TransferenciaBancaria = () => {

  const Token = document.cookie.replace('token=', '')
  const [tarjetas, setTarjetas] = useState([])

  useEffect(() => {
    fetch(API_BC_TARJETA_CODWAY, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': Token
      }
    }).then(response => response.json()).then((res) => {
      if (!res.message) {
        console.log(res)
        setTarjetas(res)
      }
    })
  }, [])


  return (
    <>
      <Nav typeNav='user' />
      <div className='d-flex flex-wrap justify-content-center m-5'>

        <p className=' fs-6 col-12' style={{ textAlign: 'justify' }}>Puedes elegir entre una de las siguientes opciones para hacer la transferencia o deposito.</p>
        <ul className="list-group">
          {tarjetas.map((tarjeta, index) => {
            return (
              <li key={index} className='text-capitalize mb-2 list-group-item mb-1'>
                clave Interbancaria: {tarjeta.claveInterbancaria}<br/>
                Nombre: {tarjeta.nombresPersona} {tarjeta.ApellidosPersonas}<br/>
                No. Cuenta:{tarjeta.noCuenta}<br/>
                No. Tarjeta:{tarjeta.noTarjeta}
              </li>
            )
          })}
        </ul>


        <p className=' fs-6 col-12' style={{ textAlign: 'justify' }}> cuando hagas el deposito manda un correo con captura de la transferencia o deposito y tu rfc al siguiente correo y en un maximo de 24 horas podras ver tu reporte en tu pagina principal.</p>



      </div>
    </>
  )
}

export default TransferenciaBancaria