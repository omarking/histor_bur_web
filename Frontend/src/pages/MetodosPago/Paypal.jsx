import React from 'react'
import Nav from '../../components/Nav'
import PayPalButton from '../../components/paypal/PayPalButton'

const Paypal = () => {
    return (
        <>
            <Nav/>
            <div className='m-3 d-flex flex-column align-items-center'>
                <h2 className = 'mb-5'>Pago con paypal</h2>
                <PayPalButton/>
            </div>
        </>
    )
}

export default Paypal