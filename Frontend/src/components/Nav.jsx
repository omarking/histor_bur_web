import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({ typeNav }) => {


    const cerrar = () => {
        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
        window.location = '/';
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow" style={{ '--bs-bg-opacity': .98 }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Consulta de Buro de Credito</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {typeNav === 'index' ?
                    (
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/login">Iniciar Sesión</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/sign-up">Registrarse</NavLink>
                                </li>
                            </ul>
                        </div>
                    )
                    :
                    (
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav d-flex col-12 justify-content-end">
                                <li className=" nav-item">
                                    <button className=' btn btn-outline-ligh text-white' onClick={cerrar}>
                                    <i className="bi bi-box-arrow-left"> Cerrar sesión</i>
                                        </button>
                                </li>
                            </ul>
                        </div>

                    )
                }
            </div>
        </nav>
    )
}

export default Nav