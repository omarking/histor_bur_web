const { default: Swal } = require("sweetalert2")
const { API_BC_METODOS } = require("../../Constants")

module.exports.Crear = (obj, token) => {
    var respuesta = false;
    fetch(API_BC_METODOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(obj)
    }).then(response => response.json()).then(response => {
        if (response.message) {
            Swal.fire(
                'Error',
                response.message,
                'error'
            )
        } else {
            Swal.fire(
                'Metodo Agregado',
                'El Metodo se agrego correctamente',
                'success'
            )
            respuesta = true;
        }
    }).catch(error => {
        Swal.fire(
            'Error',
            'No se pudo Crear el Metodo de Pago',
            'error'
        )
    })
    return respuesta
}