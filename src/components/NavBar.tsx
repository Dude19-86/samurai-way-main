import React from 'react';
import styled from "styled-components";

export const NavBar = () => {
    return (
        <NavWrapper>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
    grid-area: n;
    background-color: burlywood;
`