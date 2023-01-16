const { API_MOFFIN_BOREAU_PF, TOKEN_MOFFIN } = require("../Constants");

const consultaBoreauPF = (obj, callback) => {
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
                    ...res.response.return.Personas.Persona[0].ResumenReporte
                        .ResumenReporte[0],
                    ...res.response.return.Personas.Persona[0].ScoreBuroCredito
                        .ScoreBC[0],
                };
                callback(null, data);
            } else {
                callback({ message: res.message }, null);
            }
        });
};
export default consultaBoreauPF;
