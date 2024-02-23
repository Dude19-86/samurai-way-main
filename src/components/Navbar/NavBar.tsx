import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <NavWrapper>
            <NavBarList>
                <List><Link to={'/profile'}>Profile</Link></List>
                <List><Link to={'/dialogs'}>Messages</Link></List>
                <List><Link to={'/news'}>News</Link></List>
                <List><Link to={'/music'}>Music</Link></List>
                <List><Link to={'/settings'}>Settings</Link></List>
            </NavBarList>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
    grid-area: n;
    background-color: burlywood;
`

const NavBarList = styled.ul`
`

const List = styled.li`

`

const NavLink = styled.a`
    //color: white;
    //  &:visited {
    //      color: blue;
    //  }

    &:hover {
        color: green;
    }
`