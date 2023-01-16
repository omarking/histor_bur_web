import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { API_BC_METODOS } from '../utils/Constants'

const Pagos = () => {
    const [metodos, setMetodos] = useState([])
    const token = document.cookie.replace('token=', '');
    useEffect(() => {
        // metodos de pago
        fetch(API_BC_METODOS, {
            method: 'GET',
            headers: {

                'Content-type': 'application/json',
                'Authorization': token
            }
        }).then(response => response.json()).then(res => {
            if (res.message) {

            } else {
                setMetodos(res.filter((metodo) => (metodo.status === 1)))
            }
        })
    }, [])




    const continuar = (name, id) => {
        window.location = `/#/metodos-pago/${name.toLocaleLowerCase().replace(' ', '-')}/${id}`;
    }




    return (
        <>
            <Nav typeNav='user' />
            <p className='fs-5 m-5'>Selecciona el metodo de pago</p>
            {metodos.map((elemento, index) => {
                return (<button className=' fs-4 col-9 ms-5 me-5 p-4 mb-2 btn-metodo-pago'
                    onClick={() => continuar(elemento.nombrePago, elemento.idTipoPago)}>
                    <i className="bi bi-credit-card">
                        {' '}{elemento.nombrePago}
                    </i>
                </button>)
            })}
        </>
    )
}

export default Pagos