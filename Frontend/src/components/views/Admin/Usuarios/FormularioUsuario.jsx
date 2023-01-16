import React, { useState } from 'react'
import { editar } from '../../../../utils/Admin/Usuario/Editar'

const FormularioUsuario = ({ user,setUser }) => {
    // console.log(user)
    const [name, setName] = useState(user.nombre)
    const [ap1, setAp1] = useState(user.primerApellido)
    const [ap2, setAp2] = useState(user.segundoApellido)
    const [pc, setPc] = useState(user.codigoPostal)
    const [direccion, setDireccion] = useState(user.direccion)
    const [ciudad, setCiudad] = useState(user.ciudad)
    const [estado, setEstado] = useState(user.estado)
    const [region, setRegion] = useState(user.region)
    const [colonia, setColonia] = useState(user.colonia)
    const [rfc, setRfc] = useState(user.rfc)
    const [correo, setCorreo] = useState(user.email)
    const [nacimiento, setNacimiento] = useState(user.fechaNacimiento.split('T')[0])
    const [tipoCuenta, setTipoCuenta] = useState(user.TipoCuenta)
    const [noExterior, setNoExterior] = useState(user.noExterior)
    const [pais, setPais] = useState(user.pais)
    const [nacionalidad, setNacionalidad] = useState(user.nacionalidad)
    const [usuario, setUsuario] = useState(user.user)
    const [pass, setPass] = useState(user.password)
    // setPais(user.pais)
    // setNacionalidad(user.nacionalidad)




    const guardar = (e) => {
        e.preventDefault();
        var token = document.cookie;
        token = token.replace('token=', '');
        const obj = {
            name: name,
            surname: ap1,
            secondSurname: ap2,
            rfc: rfc,
            direction: direccion,
            city: ciudad,
            postalCode: pc,
            state: estado,
            region: region,
            suburb: colonia,
            email: correo,
            user: usuario,
            password: pass,
            birthdate: nacimiento,
            accountType: tipoCuenta,
            exteriorNumber: noExterior,
            country: pais,
            nationality: nacionalidad,
        }
        editar(user.idPersona, obj,setUser, token);
    }


    return (
        <form onSubmit={guardar} className='p-2 bg-body border shadow rounded-3 '>
            <div class="form-floating mb-1">
                <input required type="text" class="form-control" value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label >Nombres</label>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-1 col-6">
                    <input required type="text" className="form-control" value={ap1}
                        onChange={(e) => setAp1(e.target.value)}
                    />
                    <label >Primer Apellido</label>
                </div>
                <div class="form-floating mb-1 col-6">
                    <input required type="text" className="form-control" value={ap2}
                        onChange={(e) => setAp2(e.target.value)}
                    />
                    <label >Segundo Apellido</label>
                </div>
            </div>
            <div class="form-floating mb-1">
                <input required type="number" className="form-control" max='99999' value={pc}
                    onChange={(e) => setPc(e.target.value)}
                />
                <label >Codigo Postal</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
                <label >Direccion</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="number" className="form-control" value={noExterior}
                    onChange={(e) => setNoExterior(e.target.value)}
                />
                <label >No. Exterior</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                />
                <label >Ciudad</label>
            </div>
            <select
                onChange={(e) => setEstado(e.target.value)}
                value={estado}
                required className="form-select mb-1 mt-1" aria-label="Default select example">
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
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={region}
                    onChange={(e) => setRegion(e.target.value)}
                />
                <label >Municipio</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={colonia}
                    onChange={(e) => setColonia(e.target.value)}
                />
                <label >Colonia</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={rfc}
                    onChange={(e) => setRfc(e.target.value)}
                />
                <label >RFC</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <label >Correo</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="date" className="form-control" value={nacimiento}
                    onChange={(e) => setNacimiento(e.target.value)}
                />
                <label >Nacimiento</label>
            </div>
            <select
                value={tipoCuenta} onChange={(e) => setTipoCuenta(e.target.value)}
                required className="form-select mb-1 mt-1" aria-label="Default select example">
                <option selected> TIPO DE PERSONA</option>
                <option value="PF">Persona Fisica</option>
                <option value="PM">Persona Moral</option>
            </select>
            
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <label >Usuario</label>
            </div>
            <div class="form-floating mb-1">
                <input required type="text" className="form-control" value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <label >Contraseña</label>
            </div>
            <button type="submit" className="btn btn-primary col-12 mt-2 mb-2">Guardar</button>
        </form>
    )
}

export default FormularioUsuario