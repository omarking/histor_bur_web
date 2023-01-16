import Swal from "sweetalert2"
import { API_BC_USER } from "../../Constants"

const editar = (id,obj,setUser,token)=>{
    fetch(`${API_BC_USER}/${id}`,{
        method:'PATCH',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body:JSON.stringify(obj)
    })
    .then((response) =>response.json())     
    .then((response) =>{
        // console.log(response)
        if (response.patch){
            Swal.fire(
                'Usuario Actualizado',
                'El usuario se Actualizo correctamente',
                'success'
            )
            setUser(null)
        }else{
            Swal.fire(
                'Error',
                response.message,
                'error'
              )
        }
    }).catch((err)=>{
        Swal.fire(
            'Error',
            `No se pudo Actualizar el usuario,${err.message}`,
            'error'
          )
    })
}


export {editar};