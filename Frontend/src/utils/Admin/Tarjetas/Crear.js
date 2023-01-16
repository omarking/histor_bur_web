const { default: Swal } = require("sweetalert2")
const { API_BC_TARJETA_CODWAY } = require("../../Constants")

module.exports.Crear = (obj,token)=>{
    var respuesta = false;
    fetch(API_BC_TARJETA_CODWAY,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': token
        },
        body:JSON.stringify(obj)
    }).then(res=>res.json()).then(res=>{
        if (res.message){
            Swal.fire(
                'Error',
                res.message,
                'error'
            )
        }else{
            Swal.fire(
                'Tarjeta Agregada',
                'La tarjeta se agrego correctamente',
                'success'
            )
            respuesta = true;
        }
    }).catch((err)=>{
        Swal.fire(
            'Error',
            'No se pudo Crear la tarjeta',
            'error'
        )
    })
    return respuesta
}