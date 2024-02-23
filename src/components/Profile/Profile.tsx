import React from 'react';
import styled from "styled-components";
import {MyPost} from "./MyPost/MyPost";

export const Profile = () => {
    return (
        <div>
            <div>
                <Image src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="image"/>
            </div>
            <div>Avatar Description</div>
            <MyPost/>
        </div>
    );
};

const ProfileWrapper = styled.div`
    grid-area: c;
    background-color: cornflowerblue;
`

const Image = styled.img`
        width: 100%;
        height: 700px;
        object-fit: cover;
`

