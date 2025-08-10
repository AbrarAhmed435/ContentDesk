import Form from "../components/form"
import { Link } from "react-router-dom"

export default function Login(){
    return (
        <div>
        <Form route ='/api/token/' method="login" />
        <Link to ='/register'></Link>
        </div>

    )
}