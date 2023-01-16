const { default: Swal } = require("sweetalert2")
const { API_BC_USER } = require("../Constants")

module.exports.CrearUsuario=(obj)=>{
    fetch(API_BC_USER,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(response => response.json()).then(response =>{
        if (response.message){
            Swal.fire({
                position: 'top-start',
                icon: 'error',
                title: 'No se pudo crear el usuario, intenta de nuevo o más tarde',
                showConfirmButton: false,
                timer: 2000
            })
        }else{
            window.location = `/#/login`;
        }
    }).catch((err)=>{
        Swal.fire({
            position: 'top-start',
            icon: 'error',
            title: 'No se pudo crear el usuario, intenta de nuevo o más tarde',
            showConfirmButton: false,
            timer: 2000
        })
    })
}