import { Link } from "react-router-dom";

import styles from "./navbar.module.css"

function Navbar(){
    return(
        <>
         <nav>
            <div>
                <h3>Navbar</h3>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
         </nav>
        
        </>
    )
}
export default Navbar;