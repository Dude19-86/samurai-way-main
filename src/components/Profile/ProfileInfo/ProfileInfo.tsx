import React from 'react';
import styled from "styled-components";

export const ProfileInfo = () => {
    return (
        <ProfileInfoWrapper>
            <div>
                <Image src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="image"/>
            </div>
            <Description>Avatar Description</Description>
        </ProfileInfoWrapper>
    );
};

const ProfileInfoWrapper = styled.div`

`
const Image = styled.img`
        width: 100%;
        height: 700px;
        object-fit: cover;
`

const Description = styled.div`
    padding: 10px;

`
