import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderWrapper>
            <img
                src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png"
                alt="logo"/>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    grid-area: h;
    background-color: green;

    img {
        width: 93px;
        background-color: green;
        color: green;
    }
`