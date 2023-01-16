import React from 'react'
import FormLogin from '../components/Login/formLogin'
import Nav from '../components/Nav'
import { loginAPI } from '../utils/sign/login'
const Login = () => {

  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [espera, setEspera] = React.useState(false);

  
  
  const login = (e) => {
    e.preventDefault();
    setEspera(true);
    loginAPI(user, password);
    setTimeout(() => {
      setEspera(false);
    }, 2000);      
  }

      
    return (
    <>
      <Nav typeNav='index' />
      <h3 className='col-12 pt-5 text-center'>Iniciar Sesión</h3>
      {espera ?
        (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}
      <FormLogin 
      login = {login}
      setUser = {setUser}
      setPassword = {setPassword}
      />
    </>
  )
}

export default Login