import React, { useEffect, useState } from 'react'
import { API_BC_REPORTE } from '../../../utils/Constants'
import TipsList from './TipList';
const HomeView = () => {
  const Token = document.cookie.replace('token=', '');
  const [reporteDatos, setReporte] = useState({ TotalSaldosActualesRevolventes:'00000000',FechaSolicitudReporteMasReciente:0,NumeroCuentas:0,ValorScore: "0" });
  const nuevaConsulta = () => {
    window.location = '/#/metodos-pago';
  }

  useEffect(() => {
    fetch(API_BC_REPORTE, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': Token
      }
    }).then(res => res.json()).then(res => {
      var stringDate = '';
      for (var i = 0; i < res[0].FechaSolicitudReporteMasReciente.length; i++) {

        if (i === 2 || i === 4) {

          stringDate = stringDate +"-"+ res[0].FechaSolicitudReporteMasReciente[i] 
        }else{

          stringDate = stringDate + res[0].FechaSolicitudReporteMasReciente[i] 
        }
      }
      res[0].FechaSolicitudReporteMasReciente= stringDate;
      setReporte(res[0]);
      console.log(res[0])
    })
  }, [])  


  return (
    <div className="d-flex flex-column mt-5 align-items-center">
      <h4 className="col-12  ps-2 pb-3">Historial crediticio</h4>
      <section className="d-flex mx-auto  justify-content-center col-12">
        {reporteDatos.ValorScore < 300 ?
          (<div
            className="alert alert-danger col-7 me-3 text-center fs-2 fw-bold"
            role="alert"
            style={{ backgroundColor: '#ff5555' }}
          >
            {reporteDatos.ValorScore / 100}
          </div>)
          :
          reporteDatos.ValorScore >= 300 && reporteDatos.ValorScore < 600 ?
            (
              <div
                className="alert alert-warning col-md-3 text-center"
                role="alert"
                style={{ backgroundColor: '#ffef5e' }}
              >
                {reporteDatos.ValorScore / 100}
              </div>
            )
            :
            <div
              className="alert alert-success col-3 ms-3 text-center"
              role="alert"
              style={{ backgroundColor: '#60ff65' }}
            >
              {reporteDatos.ValorScore / 100}
            </div>
        }
      </section>
      <h4 className="col-12  ps-2 pb-3">Resumen de reporte</h4>
      <div className="col-11 d-flex justify-content-center">
        <table className="table mt-3 tabla-resumen">
          <thead className="table-dark">
            <tr>
              <th>Campo</th>
              <th>Dato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Puntaje </th>
              <td>{parseInt(reporteDatos.ValorScore)}</td>
            </tr>
            <tr>
              <th scope="row">Numero de cuentas</th>
              <td>{parseInt(reporteDatos.NumeroCuentas)}</td>
            </tr>
            <tr>
              <th scope="row">Ultima solicitud</th>
              <td>{reporteDatos.FechaSolicitudReporteMasReciente}</td>
            </tr>
            <tr>
              <th scope="row">Total Saldos Actuales Revolventes</th>
              <td>{reporteDatos.TotalSaldosActualesRevolventes.substr(0,reporteDatos.TotalSaldosActualesRevolventes.length-1)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 d-flex justify-content-evenly">
        <button
          type="button"
          className="btn btn-primary"
          onClick={nuevaConsulta}
        >
          Nueva Consulta
        </button>
        
      </div>
      <TipsList score ={reporteDatos.ValorScore} />
    </div>
  )
}

export default HomeView