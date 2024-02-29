import React from 'react';
import styled from "styled-components";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <Image src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="image"/>
            </div>
            <div>Avatar Description</div>
        </div>
    );
};

const Image = styled.img`
        width: 100%;
        height: 700px;
        object-fit: cover;
`