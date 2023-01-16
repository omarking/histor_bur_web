import React from 'react'
import Nav from '../components/Nav'
import Advertencia from '../components/views/Admin/Signup/Advertencia'
import FormularioRegistro from '../components/views/Admin/Signup/FormularioRegistro'
const Signup = () => {
  const [ok, setOk] = React.useState(false)
  return (
    <>
      <Nav typeNav='index' />

      <h3 className='col-12 pt-5 text-center'>Registrarse</h3>
      {!ok ? (
        <Advertencia ok={setOk}/>
      ): (
          <FormularioRegistro/>
      )
      }
    </>
  )
}

export default Signup