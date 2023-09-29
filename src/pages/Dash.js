import { useNavigate, Outlet } from "react-router-dom"

export default function Dash() {
    const navigate = useNavigate();

    const handleClic = () => {
        navigate('/');
    }
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, dash!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

            <button onClick={handleClic} type="button" className="btn btn-secondary btn-lg mx-auto">Cerrar Sesión</button>
            <br/>
            <br/>
            <Outlet/>
        </div>
    )
}
