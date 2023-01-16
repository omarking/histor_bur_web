const { default: Swal } = require("sweetalert2")
const { API_BC_REPORTE } = require("../Constants")
const { getNewToken } = require("../sign/login")

module.exports.saveReport = (id, token, obj) => {
    fetch(`${API_BC_REPORTE}${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(obj)
    }).then(res => res.json()).then(res => {
        if (res.message) {
            Swal.fire(
                'Ocurrio un error al guardar los datos en la base de datos',
                res.message,
                'error'
            )
            if (res.message === 'Access denied, invalid token') {
                Swal.fire({
                    title: 'Ingresa tu usuario',
                    input: 'text',
                    inputLabel: 'Usuario',
                    inputPlaceholder: 'ingresa tu contraseña',
                    inputAttributes: {
                        maxlength: 10,
                        autocapitalize: 'off',
                        autocorrect: 'off'
                    }
                }).then(res => {
                    if (res.isConfirmed) {
                        Swal.fire({
                            title: 'Ingresa tu constraseña',
                            input: 'password',
                            inputLabel: 'Contraseña',
                            inputPlaceholder: 'Enter your password',
                            inputAttributes: {
                                maxlength: 10,
                                autocapitalize: 'off',
                                autocorrect: 'off'
                            }
                        }).then(response => {
                            if (response.isConfirmed) {
                                getNewToken(res.value, response.value)
                                const Token = document.cookie.replace('token=', '');
                                this.saveReport(id,Token,obj)
                            }
                        })
                    }
                })
            }
        } else {
            Swal.fire(
                'Reporte generado con exito',
                'El reporte esta generado, puedes continuar con normalidad',
                'success'
            )
        }
    })
}