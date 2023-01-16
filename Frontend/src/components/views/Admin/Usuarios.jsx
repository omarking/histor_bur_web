import React from 'react'
import Search from './Usuarios/Search';
import TablaUsuarios from './Usuarios/TablaUsuarios';

const Usuarios = () => {

  const [personas, setPersonas] = React.useState([]);

  return (
    <>
      <Search
        personas={setPersonas}
      />
      <div className="mt-4 d-flex col-12 justify-content-center">
        <TablaUsuarios
          usuarios={personas}
        />

      </div>
    </>
  )
}

export default Usuarios