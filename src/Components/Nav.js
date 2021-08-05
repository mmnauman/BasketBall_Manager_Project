import React from 'react';
import {NavLink} from 'react-router-dom';
import Styled from 'styled-components'

const NavStyled = Styled.nav`

font-family: 'Graduate', cursive;

.active{
    border-bottom: solid red;
    border-radius: 4px;

}

display:flex;
background-color: #000;
min-height: 60px;
align-items: center;
gap: 15px;
justify-content: center;
a{
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
}



`;

function Nav() {
    return (
        <NavStyled>
        <NavLink to='/' exact activeClassName="active">
                Home
            </NavLink>
            <NavLink to='/create' activeClassName="active">
               Compose Team
            </NavLink>
            <NavLink to='/event' activeClassName="active">
                First Quarter
            </NavLink>
        </NavStyled>
    )
}

export default Nav
