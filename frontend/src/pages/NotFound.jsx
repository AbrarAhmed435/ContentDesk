import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <div>
            <h1 style={{color:'red'}}>404 Not found</h1>
            <p>Go To <Link to ='/'>Home page</Link></p>
        </div>
    )
}