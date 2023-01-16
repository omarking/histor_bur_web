const { default: Swal } = require("sweetalert2")
const { API_BC_METODOS } = require("../../Constants")

module.exports.cambiarMetodo = (id, obj, token) => {
    fetch(`${API_BC_METODOS}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json()).then(response => {
            if (response.message) {
                Swal.fire(
                    'Error',
                    'Ocurrio un problema al actualizar el estado',
                    'error'
                )
            }
        }).catch(err => {
            Swal.fire(
                'Error',
                'Ocurrio un problema al actualizar el estado',
                'error'
            )
        })
}