import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import guardarPago from '../../utils/Moffin/Pagos';

const PayPalButton = () => {
    const { id } = useParams();
    const token = document.cookie.replace('token=', '');
    const OnApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            // console.log(details)
            if (details.status === "COMPLETED") {
                // Swal.fire('Pago hecho con exito!!', 'success', 'Continuar')
                const data = {
                    fechaPago: details.update_time.split('T')[0],
                    costo: details.purchase_units[0].amount.value,
                    idTipoPago: id,
                }
                guardarPago(token, data);
            } else {
                Swal.fire('El pago no se completo, espera o intenta de nuevo', 'Error', 'Continuar')
            }
        });
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <PayPalScriptProvider options={
                {
                    "client-id": "Ac3WD1lIOWxy-SMXifwPlJsJzXrlDzQzCzopQi5DnrCbWB9QQTroh6oSfTuBhbhiHdmoVsQdSSbFTqm4",
                    currency: "MXN",
                }}>
                <PayPalButtons style={{ layout: "vertical" }} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "50.99",
                                    currency: "MXN",
                                },
                            },
                        ],
                    });
                }}
                    onApprove={OnApprove}
                />
            </PayPalScriptProvider>
        </div>
    )
}

export default PayPalButton