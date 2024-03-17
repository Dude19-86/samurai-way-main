import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogDataType, MessagesDataType} from "../redux/state";


type DialogsPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}
export const Dialogs = ({dialogsData, messagesData, ...restProps}: DialogsPropsType) => {
    return (
        <DialogsWrapper>
            <DialogsItemWrapper>
                {dialogsData.map(e => {
                    return (
                        <DialogsItem key={e.id} id={e.id} name={e.name}/>
                    )
                })}
            </DialogsItemWrapper>
            <Messages>
                {messagesData.map(e => {
                    return (
                        <Message key={e.id} message={e.messages}/>
                    )
                })}
            </Messages>
        </DialogsWrapper>
    );
};

const DialogsWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
`
const DialogsItemWrapper = styled.div`
    padding: 10px;
`


const Dialog = styled.div`

`

const Messages = styled.div`
    padding: 10px;
`
// const Message = styled.div`
//
// `





