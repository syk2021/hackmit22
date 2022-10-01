import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const NavbarWrapper = styled.div`
    .underline {
        border-bottom-width: 2px;
    }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavHashLink smooth to="#Lawn & Garden" exact activeClassName="underline">Lawn & Garden</NavHashLink>
            <NavHashLink smooth to="#Kitchen Appliances" exact activeClassName="underline">Kitchen Appliances</NavHashLink>
            <NavHashLink smooth to="#Power Tools" exact activeClassName="underline">Power Tools</NavHashLink>
            <NavHashLink smooth to="#Roof & Ladders" exact activeClassName="underline">Roof & Ladders</NavHashLink>
            <NavHashLink smooth to="#Generators" exact activeClassName="underline">Generators</NavHashLink>
            <NavHashLink smooth to="Plumbing" exact activeClassName="underline">Plumbing</NavHashLink>
        </NavbarWrapper>
    )
}