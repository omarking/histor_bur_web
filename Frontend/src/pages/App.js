import Nav from "../components/Nav";

function App() {
    return (
        <>
            <Nav typeNav="index" />

            <div
                class="bg-secondary p-5 text-center shadow-sm"
                style={{ "--bs-bg-opacity": 0.2 }}
            >
                <h2>Consulta de Buro de Credito</h2>

                <p style={{ textAlign: "justify" }}>
                    ¡Bienvenido a nuestra aplicación de consulta de buró de
                    crédito! Si necesitas saber tu historial crediticio esta es
                    la herramienta perfecta para ti. Con nuestra aplicación
                    podrás acceder a información actualizada y confiable sobre
                    tu historial crediticio, lo que te ayudará a tomar
                    decisiones financieras informadas y a gestionar tu dinero de
                    manera responsable. Además, nuestra aplicación te brinda la
                    posibilidad de solicitar créditos y obtener ofertas
                    personalizadas de acuerdo a tu historial crediticio. ¡No
                    esperes más y descubre todo lo que nuestra aplicación de
                    consulta de buró de crédito puede hacer por ti!
                </p>
            </div>

            <div className="d-flex col-12 p-5 navbar-nav">
                {/* <div className="col-12 pe-2">
                    <p style={{ textAlign: "justify" }}>
                        En nuestra aplicación de consulta de buró de crédito, te
                        ofrecemos la posibilidad de acceder a información
                        detallada y actualizada sobre tu historial crediticio.
                        Podrás ver tu puntaje de crédito, las deudas que tienes
                        pendientes y el historial de tus pagos. También podrás
                        ver los reportes de otras personas, siempre y cuando
                        cuentes con su autorización. Con esta información en
                        mano, podrás tomar mejores decisiones financieras y
                        gestionar tu dinero de manera responsable. ¡No esperes
                        más y descubre todo lo que nuestra aplicación de
                        consulta de buró de crédito puede hacer por ti!
                    </p>
                </div> */}
                {/* <div className="col-12 pe-2"> */}
                    <p style={{ textAlign: "justify" }}>
                        En nuestra aplicación de consulta de buró de crédito, te
                        ofrecemos la posibilidad de acceder a información
                        detallada y actualizada sobre tu historial crediticio.
                        Podrás ver tu puntaje de crédito, las deudas que tienes
                        pendientes y el historial de tus pagos. También podrás
                        ver los reportes de otras personas, siempre y cuando
                        cuentes con su autorización. Con esta información en
                        mano, podrás tomar decisiones financieras informadas y
                        gestionar tu dinero de manera responsable. ¡No esperes
                        más y descubre todo lo que nuestra aplicación de
                        consulta de buró de crédito puede hacer por ti!
                    </p>
                {/* </div> */}
            </div>
        </>
    );
}

export default App;
