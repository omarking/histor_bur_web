import React from 'react'

const AdminMenu = ({ pagina, setPagina }) => {
    return (
        <>
            {pagina === 1 ? (
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className="nav-link active"
                            aria-current="page"
                            onClick={() => setPagina(1)}
                        >
                            <i className="bi bi-people"> Usuarios</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setPagina(2)}>
                            <i className="bi bi-credit-card"> Tarjetas / Metodos de pago</i>
                        </button>
                    </li>
                    
                </ul>
            ) : pagina === 2 ? (
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className="nav-link"
                            aria-current="page"
                            onClick={() => setPagina(1)}
                        >
                            <i className="bi bi-people"> Usuarios</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setPagina(2)}>
                            <i className="bi bi-credit-card"> Tarjetas / Metodos de pago</i>
                        </button>
                    </li>
                    
                </ul>
            ) : (
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className="nav-link"
                            aria-current="page"
                            onClick={() => setPagina(1)}
                        >
                            <i className="bi bi-people"> Usuarios</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setPagina(2)}>
                            <i className="bi bi-credit-card"> Tarjetas / Metodos de pago</i>
                        </button>
                    </li>
                    {/* <li className="nav-item">
                        <button className="nav-link active" onClick={() => setPagina(3)}>
                            <i className="bi bi-graph-up"> Comparativas</i>
                        </button>
                    </li> */}
                </ul>
            )}
        </>
    )
}

export default AdminMenu