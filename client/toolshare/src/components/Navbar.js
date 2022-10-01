import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const NavbarWrapper = styled.div`
    display: inline;
    .navbar-link {
        text-decoration: none;
        padding-left: 30px;
        color: #000000;
    }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavHashLink smooth to="#Lawn & Garden" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/lawn-mower.png" alt=""/>
                <p>Lawn & Garden</p>
            </NavHashLink>
            <NavHashLink smooth to="#Kitchen Appliances" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/mixer.png" alt=""/>
                <p>Kitchen Appliances</p>
            </NavHashLink>
            <NavHashLink smooth to="#Power Tools" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/drill.png" alt=""/>
                <p>Power Tools</p>
            </NavHashLink>
            <NavHashLink smooth to="#Roof & Ladders" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/ladder.png" alt=""/>
                <p>Roof & Ladders</p>
            </NavHashLink>
            <NavHashLink smooth to="#Generators" className="navbar-link">
                <img src="https://img.icons8.com/ios-filled/50/000000/automotive-generator.png" alt=""/>
                <p>Generators</p>
            </NavHashLink>
            <NavHashLink smooth to="Plumbing" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/plumbing.png" alt=""/>
                <p>Plumbing</p>
            </NavHashLink>
        </NavbarWrapper>
    )
};

export default Navbar;
