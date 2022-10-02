import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const NavbarWrapper = styled.div`
    display: flex;
    justify-content:space-around;
    margin-left: 75px;
    margin-right: 75px;
    margin-top: 20px;
    .navbar-link {
        text-decoration: none;
        padding-left: 30px;
        color: #000000;
    }
    .paragraph{
        margin:0px;
        font-size: 18px;
        font-weight: normal;
    }
    .linksss{
    grid-template-columns: auto;
    justify-content: center;
    text-align: center;
    border-bottom: 2px solid white;
    line-height: 24px;

    }
    .linksss:hover{
        color: green;
        border-bottom: 2px solid green;
        line-height: 24px;
    }
`;
const Navbar = () => {
    return (
        <>
        <NavbarWrapper>
            <NavHashLink smooth to="#Lawn & Garden" className="navbar-link">
                <div className='linksss'>
                <img src="https://img.icons8.com/ios-glyphs/42/000000/lawn-mower.png" alt="" className="center"/>
                <p className='paragraph'>Lawn & Garden</p>
                </div>
            </NavHashLink>
            <NavHashLink smooth to="#Kitchen Appliances" className="navbar-link">
                <div className='linksss'><img src="https://img.icons8.com/ios-glyphs/42/000000/mixer.png" alt="" className="center"/>
                <p className='paragraph'>Kitchen Appliances</p></div>
            </NavHashLink>
            <NavHashLink smooth to="#Power Tools" className="navbar-link">
                <div className='linksss'><img src="https://img.icons8.com/ios-glyphs/42/000000/drill.png" alt="" class="center"/>
                <p className='paragraph'>Power Tools</p></div>
          </NavHashLink>
            <NavHashLink smooth to="#Roof & Ladders" className="navbar-link">
                <div className='linksss'><img src="https://img.icons8.com/ios-glyphs/42/000000/ladder.png" alt="" class="center"/>
                <p className='paragraph'>Roof & Ladders</p></div>         
                </NavHashLink>
            <NavHashLink smooth to="#Generators" className="navbar-link">
                <div className='linksss'><img src="https://img.icons8.com/ios-filled/42/000000/automotive-generator.png" alt="" class="center"/>
                <p className='paragraph'>Generators</p></div>
                 </NavHashLink>
            <NavHashLink smooth to="#Plumbing" className="navbar-link">
                <div className='linksss'><img src="https://img.icons8.com/ios-glyphs/42/000000/plumbing.png" alt="" class="center"/>
                <p className='paragraph'>Plumbing</p></div>   
         </NavHashLink>
        </NavbarWrapper>
        <hr class='linee'/>
        </>
    )
};

export default Navbar;
