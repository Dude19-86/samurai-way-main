import React from 'react';
import styled from "styled-components";

export const Profile = () => {
    return (
        <ProfileWrapper>
            <div>
                <img src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="image"/>
            </div>
            <div>Avatar Description</div>
            <div>
                My Posts
                <div>New Post</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div`
    grid-area: c;
    background-color: cornflowerblue;

    img {
        width: 100%;
        height: 700px;
    }

`