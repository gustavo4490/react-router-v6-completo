import { useParams } from "react-router-dom"

export default function UserPage() {
    const params = useParams();

    return (
        <>
            <br />
            <div className="card">
                <div className="card-body">
                    <div className="alert alert-secondary" role="alert">
                        El id del usuario es {params.id}
                    </div>
                </div>
            </div>
        </>
    )
}
