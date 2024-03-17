import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <NavWrapper>
            <NavBarList>
                <List><NavLink to={'/profile'}>Profile</NavLink></List>
                <List><NavLink to={'/dialogs'}>Messages</NavLink></List>
                <List><NavLink to={'/news'}>News</NavLink></List>
                <List><NavLink to={'/music'}>Music</NavLink></List>
                <List><NavLink to={'/settings'}>Settings</NavLink></List>
            </NavBarList>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
    grid-area: n;
    background-color: burlywood;
    padding: 20px;
`

const NavBarList = styled.ul`
`

const List = styled.li`
    a {
        color: white;
        &:hover {
            color: green;
        }
        
        &.active {
            color: gold
        }
        & {
            text-decoration: none;
        }
    }
`