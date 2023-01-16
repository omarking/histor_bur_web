import React, { useState } from 'react'
import { Crear } from '../../../../utils/Admin/Metodos/Crear';

const FormuarioMetodos = () => {

  const Token = document.cookie.replace('token=', '');
  const [nombre,setNombre] = useState('');

  const subir = (e)=>{
    e.preventDefault();
    let completo= Crear({name:nombre},Token);

    if (completo){
      alert(nombre)
      setNombre(null)
      alert(nombre)
    }
  }




  return (
    <form className='col-7 d-flex flex-column align-items-center' onSubmit={subir}>
      <h4>Nuevo Metodo de Pago</h4>
      <input type="text" value={nombre} className='form-control mb-1' placeholder="Mercado Pago" onChange={(e)=>setNombre(e.target.value)} />
      <button type="submit" className='btn btn-primary col-12'>Guardar</button>
    </form>
  )
}

export default FormuarioMetodos