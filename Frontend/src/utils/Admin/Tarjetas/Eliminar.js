const { default: Swal } = require("sweetalert2")
const { API_BC_TARJETA_CODWAY } = require("../../Constants")

module.exports.EliminarTarjeta = (id, token) => {
    fetch(`${API_BC_TARJETA_CODWAY}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(response => response.json()).then(res => {
        if (res.message) {
            Swal.fire(
                'Error',
                'No se pudo eliminar la tarjeta',
                'error'
            )
        } else {
            if (res.delete) {
                Swal.fire(
                    'Tarjeta Eliminada',
                    'La tarjeta se elimino correctamente',
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