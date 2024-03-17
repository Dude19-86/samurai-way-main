import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/news/News';
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogDataType, MessagesDataType, PostDataType} from "./components/redux/state";

type AppType = {
    postData: PostDataType[]
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}

export const App = ({postData, dialogsData, messagesData, ...restProps}: AppType) => (
    <BrowserRouter>
        <AppWrapper>
            <Header/>
            <NavBar/>
            <AppWrapperContent>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                <Route path={'/profile'} render={() => <Profile postData={postData}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
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








