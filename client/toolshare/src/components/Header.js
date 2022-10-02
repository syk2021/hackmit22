import { NavLink } from 'react-router-dom'
import './components-css/header.css';

export default function Header(){
    return(
    <div id='mm'>
        <div class="commuShare-title">
            <NavLink smoooth to="/" className="header-navlink">
                <b>commuShare</b>
                </NavLink>
        </div>
        <div>
            Search bar  
        </div>
        <div>
            Zip Code
        </div>
        <div>
        <NavLink smoooth to="/reservations" className="header-navlink">
                Reservations
                </NavLink>
        </div>
    </div>);
}