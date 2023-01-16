import Swal from "sweetalert2";
import { API_BC_METODOS } from "../Constants";
import consultaBoreauPFClient from "./boreauClient";

const guardarPago = (token, data) => {
    fetch(`${API_BC_METODOS}save-payment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.message) {
                Swal.fire("Error", response.message, "error");
            } else {
                Swal.fire(
                    "Consultando tu buro de credito",
                    "Espera un momento",
                    "info"
                );

                consultaBoreauPFClient(token, (err, result) => {
                    if (err) Swal.fire("Error", result.message, "error");
                    else window.location = `/#/home`;
                });
            }
        });
};


export default guardarPago;