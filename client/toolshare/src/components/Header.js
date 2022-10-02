import { NavLink } from 'react-router-dom'
import './components-css/header.css';

export default function Header(){
    return(
    <div id='mm'>
        <div id="name_id">
            <NavLink smoooth to="/" className="header-navlink" id='name_id'>
                <b>commuShare</b>
                </NavLink>
        </div>
        <div class = "center_align" id = "search_bar" >
        <input type = "text" placeholder = "          Search home hardwares     " id="placeholder_id"></input>
            <img src="https://img.icons8.com/color/344/search--v1.png" id ="search_img"></img> 
        </div>

        

        <div id = "center_align2">
            <img src="https://static.thenounproject.com/png/100770-200.png" id ="location_img"></img>
            12345
        </div>


        <div id='reserveId'>
        <NavLink smoooth to="/reservations" className="header-navlink" id='reserveId'>
                Reservations
        </NavLink>
        </div>

        <NavLink smoooth to="/add" className="header-navlink" id='reserveId'>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" id='addbutton'></img>
        </div>
        </NavLink>
        
    </div>);
}