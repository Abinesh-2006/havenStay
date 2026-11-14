import './Header.css';
import { useNavigate } from 'react-router-dom';
function Header(){
    const navigate = useNavigate();
return(
   
    <div className="header">
        <div className="hotel-list">
        <h1 >Hotel List</h1>
        </div>
    <div className="add-hotel">
        <button onClick={()=>navigate('/add-hotel')}>+ Add New Hotel</button>
        </div>
        </div>
);
}
export default Header;