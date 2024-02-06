import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderWrapper>
            <img
                src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                alt="logo"/>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    grid-area: h;
    background-color: green;

    img {
        width: 50px;
    }
`