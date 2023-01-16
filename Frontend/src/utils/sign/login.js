import Swal from "sweetalert2";
import { API_BC_LOGIN } from "../Constants";

const loginAPI = (user, password) => {
    fetch(API_BC_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: password
        })
    })
        .then(response => response.json()).then(response => {
            if (response.token) {

                document.cookie = `token=${response.token};max-age=${60 * 60};path=/;somesite=strict`
                if (response.type === '1') {
                    window.location = `/#/admin-center/`
                } else if (response.type === '2') {
                    window.location = `/#/home/`
                }
            } else {
                showMessageError()
            }
        }).catch((err) => {
            showMessageError()
        })
}



const showMessageError = () => {
    Swal.fire({
        position: 'top-start',
        icon: 'error',
        title: 'Usuario o contraseña incorrectos',
        showConfirmButton: false,
        timer: 1500
    })
}


const getNewToken = (user,password)=>{
    fetch(API_BC_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: password
        })
    })
        .then(response => response.json()).then(response => {
            if (response.token) {

                document.cookie = `token=${response.token};max-age=${60 * 60};path=/;somesite=strict`

            } else {
                showMessageError()
            }
        }).catch((err) => {
            showMessageError()
        })
}

export { loginAPI,getNewToken }