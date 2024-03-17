import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {dialogs, messages, posts } from './components/redux/state';



ReactDOM.render(
    <App postData={posts} dialogsData={dialogs} messagesData={messages}/>,
    document.getElementById('root')
);

