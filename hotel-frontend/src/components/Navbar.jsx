import './Navbar.css';
import{Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                HavenStay 
            </div>

            
            <div className="nav-links">
                <Link to="/">Home</Link>
            </div>
        </nav>
)
}
export default Navbar;