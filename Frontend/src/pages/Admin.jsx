import React from 'react'
import AdminMenu from '../components/Admin/AdminMenu'
import Nav from '../components/Nav'
import Tarjetas from '../components/views/Admin/Tarjetas'
import Usuarios from '../components/views/Admin/Usuarios'

const Admin = () => {
  const [pagina, setPagina] = React.useState(1);
  return (
    <>
      <Nav typeNav='user' />
      <AdminMenu
        pagina={pagina}
        setPagina={setPagina}
      />


      {pagina === 1 ?
        (<Usuarios/>)
        :
        pagina === 2 ?
          (<Tarjetas/>)
          :
          null
      }
    </>
  )
}

export default Admin