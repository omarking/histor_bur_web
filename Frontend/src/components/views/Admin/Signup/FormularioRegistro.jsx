import React from 'react'
import { Link } from 'react-router-dom'
import { CrearUsuario } from '../../../../utils/sign/Registro';

const FormularioRegistro = () => {
  const guardar = (e) => {
    e.preventDefault();
    // var datos = []
      
    const obj = {
      name:e.target[0].value,
      surname:e.target[1].value,
      secondSurname:e.target[2].value,
      rfc:e.target[3].value,
      direccion:e.target[8].value,
      city:e.target[10].value,
      postalCode:e.target[5].value,
      region:e.target[11].value,
      state:e.target[13].value,
      suburb:e.target[12].value,
      email:e.target[4].value,
      birthdate:e.target[6].value,
      accountType:e.target[7].value,
      exteriorNumber:e.target[9].value,
      user:e.target[14].value,
      password:e.target[15].value,
      country:"MX",
      nationality:"MX",
    }
    CrearUsuario(obj);
  }


  return (
    <form className='d-flex flex-column pt-5 pb-1 align-items-center' onSubmit={guardar}>
      {/* <small className='col-12 text-danger text-center'>Mensajes para Persona Moral</small> */}
      <br />
      <br />
        <div className='col-5 text-center'>
          {/* <small className='col-12 text-danger'>**Nombre de la empresa**</small> */}
          <input required className='form-control mb-2 text-center' placeholder='NOMBRE' />
          <div className='input-group'>
            <input required className='form-control mb-2 text-center' placeholder='PRIEMER APELLIDO' />
            <input required className='form-control mb-2 text-center' placeholder='SEGUNDO APELLIDO' />
          </div>
          
          {/* <small className='col-12 text-danger'>*RFC Empresa*</small> */}
          <input required maxLength={13} className='form-control mb-3 text-center' placeholder='RFC' />
          <input required type='email' className='form-control mb-3 text-center' placeholder='CORREO' />
          {/* <small className='col-12 text-danger'>*CP Empresa*</small> */}
          <input required type='number' className='form-control mb-3 text-center' placeholder='CODIGO POSTAL' />
          <input required type = 'date' className='form-control mb-3 text-center' placeholder='FECHA DE NACIMIENTO' />


          <select required className="form-select mb-3" aria-label="Default select example">
            <option selected> TIPO DE PERSONA</option>
            <option value="PF">Persona Fisica</option>
            {/* <option value="PM">Persona Moral</option> */}
          </select>


          {/* <small className='col-12 text-danger'>*Direccion*</small> */}
          <div className='input-group'>
            <input required className='form-control mb-3 text-center ' placeholder='DIRECCION' />
            <input required className='form-control mb-3 text-center ' placeholder='NO. EXTERIOR' />
          </div>

          {/* <small className='col-12 text-danger'>*Ciudad*</small> */}
          <input required className='form-control mb-3 text-center' placeholder='CIUDAD' />

          {/* <small className='col-12 text-danger'>*Municipio*</small> */}
          <input required className='form-control mb-3 text-center' placeholder='MUNICIPIO' />


          {/* <small className='col-12 text-danger'>*Colonia*</small> */}
          <input required className='form-control mb-3 text-center' placeholder='COLONIA' />
          {/* <input required className='form-control mb-3 text-center' placeholder='PAIS' value='MX' />
          <input required className='form-control mb-3 text-center' placeholder='NACIONALIDAD' value='MX'/> */}

          {/* <small className='col-12 text-danger'>*Estado*</small> */}
          <select required className="form-select mb-3" aria-label="Default select example">
            <option selected> ESTADO</option>
            <option value="AGU">AGUASCALIENTES</option>
            <option value="BCN">BAJA CALIFORNIA</option>
            <option value="BCS">BAJA CALIFORNIA SUR</option>
            <option value="CAM">CAMPECHE</option>
            <option value="CHP">CHIAPAS</option>
            <option value="CHH">CHIHUAHUA</option>
            <option value="CMX">CIUDAD DE MEXICO</option>
            <option value="COA">COAHUILA</option>
            <option value="COL">COLIMA</option>
            <option value="DUR">DURANGO</option>
            <option value="GUA">GUANAJUATO</option>
            <option value="GRO">GUERRERO</option>
            <option value="HID">HIDALGO</option>
            <option value="JAL">JALISCO</option>
            <option value="MIC">MICHOACAN</option>
            <option value="MOR">MORELOS</option>
            <option value="MEX">MEX</option>
            <option value="NAY">NAYARIT</option>
            <option value="NLE">NUEVO LEÓN</option>
            <option value="OAX">OAXACA</option>
            <option value="PUE">PUEBLA</option>
            <option value="QUE">QUERETARO</option>
            <option value="ROO">QUINTANA ROO</option>
            <option value="SLP">SAN LUIS POTOSI</option>
            <option value="SIN">SINALOA</option>
            <option value="SON">SONORA</option>
            <option value="TAB">TABASCO</option>
            <option value="TAM">TAMAULIPAS</option>
            <option value="TLA">TLAXCALA</option>
            <option value="VER">VERACRUZ</option>
            <option value="YUC">YUCATAN</option>
            <option value="ZAC">ZACATECAS</option>
          </select>

          {/* <small className='col-12 text-danger'>*Usuario*</small> */}
          <input required className='form-control mb-3 text-center' placeholder='USUARIO' />
          {/* <small className='col-12 text-danger'>*Contraseña*</small>           */}
          <input required className='form-control mb-3 text-center' placeholder='CONTRASEÑA' />

          <button type="submit" className="btn btn-primary col-12 mb-2">Ingresar</button>
          <p className='col-12'> Ya tienes una cuenta. <Link to='/login'> Inicia sesión</Link>
          </p>
      {/* <small>Si eres una Persona Moral llena los demas campos que no cuen tan con letras en rojo con un " - "para poder continuar con el registro</small> */}
      </div>
    </form>
    
  )
}

export default FormularioRegistro