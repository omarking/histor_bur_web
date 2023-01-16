import React from 'react'
import TablaTarjetas from './Tarjetas/TablaTarjetas'
import FormularioTarjetas from './Tarjetas/FormularioTarjetas'
import TablaMetodos from './MetodosPago/TablaMetodos'
import FormularioMetodos from './MetodosPago/FormuarioMetodos'

const Tarjetas = () => {
  return (
    <>
    <h2 className='col-12 text-center'>Tarjetas</h2>
    <div className="d-flex flex-wrap">
      <div className = ' ps-3'>
        <TablaTarjetas/>
      </div>
      <div className = 'col-8 d-flex justify-content-center p-1'>
        <FormularioTarjetas/>
      </div>
    </div>
    <hr />
    <h2 className='col-12 text-center mt-4 mb-3'>Metodos de Pago</h2>
    <div className="d-flex flex-wrap">
      <div className = ' ps-3'>
        <TablaMetodos/>
      </div>
      <div className = 'col-8 d-flex justify-content-center p-1'>
        <FormularioMetodos/>
      </div>
    </div>
    </>
  )
}

export default Tarjetas