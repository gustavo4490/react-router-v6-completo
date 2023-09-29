import '../homePage.css'; // Importa tus estilos CSS


export default function Homepage() {
    return (
        <>
            <header className="bg-primary bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Welcome to Home Page</h1>
                    <p className="lead"> app de prueba </p>
                    <a className="btn btn-lg btn-light" href="#about">Start scrolling!</a>
                </div>
            </header>

        </>

    )
}
