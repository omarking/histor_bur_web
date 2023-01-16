import React ,{useState} from 'react'
import {Crear} from '../../../../utils/Admin/Tarjetas/Crear'


const FormularioTarjetas = () => {
    const [tarjeta,setTarjeta]= useState('');
    const [cuenta,setCuenta]= useState('');
    const [clave, setClave]= useState('');
    const [nombres, setNombres]= useState('');
    const [apellidos,setApellidos]= useState('');



    const guardar =(e)=>{
        e.preventDefault();
        const obj = {
            card: tarjeta,
            account:cuenta,
            interbankKey:clave,
            name:nombres,
            surname:apellidos
        }
        const token = document.cookie.replace('token=', '');
        const res = Crear(obj,token)
        if (res){
            setTarjeta('');
            setCuenta('');
            setClave('');
            setNombres('');
            setApellidos('');
        }
    }


    return (
        <form className='col-7 d-flex flex-column align-items-center' onSubmit={guardar}>
            <h4 className='col-12 text-center'>Nueva Tarjeta</h4>

            <input onChange={(e)=>setTarjeta(e.target.value)} value={tarjeta} required className='form-control mb-1' type='number' placeholder='No. Tarjeta' />
            <input onChange={(e)=>setCuenta(e.target.value)} value={cuenta} required className='form-control mb-1' type='number' placeholder='No. Cuenta' />
            <input onChange={(e)=>setClave(e.target.value)} value={clave} required className='form-control mb-1' type='number' placeholder='Clave Interbancaria' />
            <input onChange={(e)=>setNombres(e.target.value)} value={nombres} required className='form-control mb-1' placeholder='Nombres Persona' />
            <input onChange={(e)=>setApellidos(e.target.value)} value={apellidos} required className='form-control mb-1' placeholder='Apellidos' />
            <button type='submit' className='btn btn-primary col-12'>
                Guardar
            </button>
        </form>
    )
}


export default FormularioTarjetas