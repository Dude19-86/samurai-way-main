import React from 'react';
import styled from "styled-components";

export const NavBar = () => {
    return (
        <NavWrapper>
            <NavBarList>
                <List><NavLink href="#">Profile</NavLink></List>
                <List><NavLink href="#">Messages</NavLink></List>
                <List><NavLink href="#">News</NavLink></List>
                <List><NavLink href="#">Music</NavLink></List>
                <List><NavLink href="#">Settings</NavLink></List>
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
  color: white;
`