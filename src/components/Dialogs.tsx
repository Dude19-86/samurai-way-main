import React from 'react';
import styled from "styled-components";

type DialogsPropsType = {
    title: string
}
export const Dialogs = ({...restProps}:DialogsPropsType) => {
    return (
        <DialogsWrapper>
            Dialogs
            <div>{restProps.title}</div>
        </DialogsWrapper>
    );
};

const DialogsWrapper = styled.div`
    
`