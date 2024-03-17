import React from 'react';
import styled from "styled-components";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../redux/state";

type ProfileType = {
    postData: PostDataType[]
}
export const Profile = ({postData, ...restProps}: ProfileType) => {
    return (
        <ProfileWrapper>
            <ProfileInfo />
            <MyPost postData={postData}/>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div`
    //grid-area: c;
    //background-color: cornflowerblue;
    //padding: 10px;
`



