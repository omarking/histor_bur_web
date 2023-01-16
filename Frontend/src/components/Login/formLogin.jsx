import React from 'react'
import { Link } from 'react-router-dom'

const FormLogin = ({ login, setUser, setPassword }) => {

    const [mostrarPWD, setMostrarPWD] = React.useState('password');



    const mostrarPass = () => {
        if (mostrarPWD === 'password') {
            setMostrarPWD('text');
        } else {
            setMostrarPWD('password');
        }
    }



    return (
        <form className='d-flex flex-column p-5 align-items-center' onSubmit={login}>
            <div className='col-7 text-center'>
                <input
                    className='form-control mb-2 text-center'
                    placeholder='USUARIO'
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                <input
                    type={mostrarPWD}
                    className='form-control mb-3 text-center'
                    placeholder='CONTRASEÑA'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="buttom"
                    className="btn  col-12 mb-2"
                    style={{ 'backgroundColor': '#efefef' }}
                    onClick={mostrarPass}
                >
                    mostar/ocultar contraseña
                </button>
                <button
                    type="submit"
                    className="btn btn-primary col-12 mb-2"
                >
                    Ingresar
                </button>
                <Link className='col-12 ' to='/sign-up'>O Registrarse</Link>
            </div>
        </form>
    )
}
export default FormLogin