import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {hover} from "@testing-library/user-event/dist/hover";

type DialogsItemType = {
    name: string
    id: number
}
export const DialogsItem = ({name, id, ...restProps}: DialogsItemType) => {
    return (
        <DialogItemWrapper>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </DialogItemWrapper>
    );
};

const DialogItemWrapper = styled.div`
    a {
        color: white;
    }
    a:hover {
        color: gold;
    }
    
    a:active {
        color: green;
    }
`

