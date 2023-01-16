const {
    API_BC_USER,
    API_MOFFIN_BOREAU_PF,
    TOKEN_MOFFIN,
} = require("../Constants");

const consultaBoreauPFClient = (token, callback) => {
    fetch(`${API_BC_USER}/get/user-by-token`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: token,
        },
    })
        .then((response) => response.json())
        .then((respuesta) => {
            // console.log(respuesta)
            const usuario = respuesta[0];
            var obj;
            if (usuario.TipoCuenta === "PF") {
                obj = {
                    birthdate: usuario.fechaNacimiento.split("T")[0],
                    firstName: usuario.nombre.split(" ")[0],
                    middleName: usuario.nombre.split(" ")[1] || null,
                    firstLastName: usuario.primerApellido,
                    secondLastName: usuario.segundoApellido,
                    rfc: usuario.rfc,
                    accountType: usuario.TipoCuenta,
                    address: usuario.direccion,
                    neighborhood: usuario.colonia,
                    city: usuario.ciudad,
                    municipality: usuario.region,
                    state: usuario.estado,
                    zipCode: usuario.codigoPostal,
                    exteriorNumber: usuario.noExterior,
                    country: usuario.pais,
                    nationality: usuario.nacionalidad,
                };
            }else{
                obj = {
                    tradeName: usuario.nombre,
                    rfc: usuario.rfc,
                    accountType: usuario.TipoCuenta,
                    address: usuario.direccion,
                    neighborhood: usuario.colonia,
                    municipality: usuario.region,
                    state: usuario.estado,
                    zipCode: usuario.codigoPostal,
                    exteriorNumber: usuario.noExterior,
                    country:usuario.pais,
                    nationality:usuario.nacionalidad
                }
            }
            fetch(API_MOFFIN_BOREAU_PF, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Token ${TOKEN_MOFFIN}`,
                },
                body: JSON.stringify(obj),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.status === "SUCCESS") {
                        const data = {
                            ...res.response.return.Personas.Persona[0]
                                .ResumenReporte.ResumenReporte[0],
                            ...res.response.return.Personas.Persona[0]
                                .ScoreBuroCredito.ScoreBC[0],
                        };
                        callback(null, data);
                    } else {
                        callback({ message: res.message }, null);
                    }
                });
        });
};

export default consultaBoreauPFClient;
