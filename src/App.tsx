import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from "./components/Profile/Profile";


export const App = () => (
    <AppWrapper>
        <Header/>
        <NavBar/>
        <Profile/>
    </AppWrapper>
);


const AppWrapper = styled.div`
    background-color: skyblue;
    display: grid;
    margin: 0 auto;
    width: 100%;
    grid-template-areas: 
    'h h'
    'n c';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 10px;
`








