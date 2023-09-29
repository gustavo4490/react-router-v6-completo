import '../homePage.css'; // Importa tus estilos CSS
import {Link} from 'react-router-dom'


export default function Homepage() {
    return (
        <>
            <header className="bg-primary bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Welcome to Home Page</h1>
                    <p className="lead"> app de prueba </p>
                    {/* etiqueta link para no refrescar la pagina  */}
                    <Link className="btn btn-lg btn-light" to={'/Users'}>Usuarios</Link>
                </div>
            </header>

        </>

    )
}
