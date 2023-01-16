import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Pagos from "./pages/Pagos";
import TransferenciaBancaria from "./pages/MetodosPago/TransferenciaBancaria";
import Paypal from "./pages/MetodosPago/Paypal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <HashRouter>
        {/* Utiliza HashRouter para manejar las navegaciones en la aplicación pone en la ruta el # (Hash) */}
        <Routes>
            <Route index element={<App />} />
            {/* Route para la ruta principal, renderiza el componente App que es una pagina de inicio*/}
            <Route path="/login" element={<Login />} />
            {/* Route para la ruta "/login", renderiza el componente Login */}
            <Route path="/sign-up" element={<Signup />} />
            {/* Route para la ruta "/sign-up", renderiza el componente Signup */}
            <Route path="/home/" element={<Home />} />
            {/* Route para la ruta "/home/", renderiza el componente Home que es la pagina 
            principal del usuario cliente*/}
            <Route path="/admin-center/" element={<Admin />} />
            {/* Route para la ruta "/admin-center/", renderiza el componente Admin que es la pagina 
            principal del usuario administrador */}
            <Route path="/metodos-pago" element={<Pagos />} />
            {/* Route para la ruta "/metodos-pago", renderiza el componente Pagos que muestra los
            metodos de pago*/}
            <Route
                path="/metodos-pago/transferencia-bancaria/:id"
                element={<TransferenciaBancaria />}
            />
            {/* Route para la ruta "/metodos-pago/transferencia-bancaria",
            renderiza el componente TransferenciaBancaria que muestra las tarjetas
            de la empresa almacenadas por el Admin*/}
            <Route path="/metodos-pago/paypal/:id" element={<Paypal />} />
            {/* Route para la ruta "/metodos-pago/paypal",
            renderiza el componente Paypal que muestra los botones de la
            pasarela de pago de paypal*/}
        </Routes>
    </HashRouter>
);
