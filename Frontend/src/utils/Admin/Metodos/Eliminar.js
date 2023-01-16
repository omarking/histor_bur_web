const { default: Swal } = require("sweetalert2")
const { API_BC_METODOS } = require("../../Constants")

module.exports.eliminarMetodos = (id, token) => {
    fetch(`${API_BC_METODOS}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(response => response.json()).then(res => {
        if (res.message) {
            Swal.fire(
                'Error',
                res.message,
                'error'
            )
        } else {
            if (res.delete) {
                Swal.fire(
                    'Metodo de Pago Eliminada',
                    'El Metodo de Pago se elimino correctamente',
                    'success'
                )
            }
        }
    }).catch((err) => {
        Swal.fire(
            'Error',
            'No se pudo eliminar la tarjeta',
            'error'
        )
    })
}