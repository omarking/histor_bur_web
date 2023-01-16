import React from 'react'
import Swal from 'sweetalert2'
import { API_BC_USER } from '../../../../utils/Constants'
const Search = ({ personas }) => {
    const Token = document.cookie.replace('token=', '')
    const [rfc, setRFC] = React.useState('')
    const search = (e) => {
        e.preventDefault();
        fetch(`${API_BC_USER}/${rfc}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': Token
            }
        }).then(res => res.json()).then(res => {
            if (res.message) {
                Swal.fire({
                    title: 'ERROR',
                    text: `${res.message}`,
                    width: 600,
                    padding: '3em',
                })
            } else {
                if (res.length === 0) {
                    Swal.fire({
                        title: 'UPS',
                        text: 'El usuario que buscas no existe',
                        width: 600,
                        padding: '3em',
                    })
                }else{
                    // console.log(res);
                    personas(res);
                }
            }
        })
    }



    return (
        <div className="col-12 d-flex justify-content-center mt-3">
            <form className="d-flex col-6" role="search" onSubmit={search}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setRFC(e.target.value)}
                    required
                />
                <button className="btn btn-outline-primary" type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search