import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const NavbarWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    margin-left: 50px;
    margin-right: 50px;
    .navbar-link {
        text-decoration: none;
        padding-left: 30px;
        color: #000000;
    }
    .paragraph{
        margin:0px;
        font-size: 15px;
    }
`;
const Navbar = () => {
    return (
        <>
        <NavbarWrapper>
            <NavHashLink smooth to="#Lawn & Garden" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/lawn-mower.png" alt="" className="center"/>
                <p className='paragraph'>Lawn & Garden</p>
            </NavHashLink>
            <NavHashLink smooth to="#Kitchen Appliances" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/mixer.png" alt="" className="center"/>
                <p className='paragraph'>Kitchen Appliances</p>
            </NavHashLink>
            <NavHashLink smooth to="#Power Tools" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/drill.png" alt="" class="center"/>
                <p className='paragraph'>Power Tools</p>
            </NavHashLink>
            <NavHashLink smooth to="#Roof & Ladders" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/ladder.png" alt="" class="center"/>
                <p className='paragraph'>Roof & Ladders</p>
            </NavHashLink>
            <NavHashLink smooth to="#Generators" className="navbar-link">
                <img src="https://img.icons8.com/ios-filled/30/000000/automotive-generator.png" alt="" class="center"/>
                <p className='paragraph'>Generators</p>
            </NavHashLink>
            <NavHashLink smooth to="#Plumbing" className="navbar-link">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/plumbing.png" alt="" class="center"/>
                <p className='paragraph'>Plumbing</p>
            </NavHashLink>
        </NavbarWrapper>
        <hr/>
        </>
    )
};

export default Navbar;
