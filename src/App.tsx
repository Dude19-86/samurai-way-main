import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/news/News';
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";


export const App = () => (
    <BrowserRouter>
        <AppWrapper>
            <Header/>
            <NavBar/>
            <AppWrapperContent>
                <Route path={'/dialogs'} component={() => <Dialogs title={'Dialogs-Prop-title'}/>}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                {/*/!*<Dialogs title={'Dialogs'}/>*!/*/}
                {/*<Profile/>*/}
            </AppWrapperContent>
        </AppWrapper>
    </BrowserRouter>
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


const AppWrapperContent = styled.div`
    grid-area: c;
    background-color: cornflowerblue;
`








