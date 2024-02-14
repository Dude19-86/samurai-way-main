import React from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";

export const MyPost = () => {
    return (
        <MyPostWrapper>
                My Posts
            <div>
                <TextArea></TextArea>
                <Button>Add Post</Button>
            </div>
                <Posts>
                    <Post message={'Hi, how are you?'}/>
                    <Post message={'It\'s my first post'}/>
                </Posts>
        </MyPostWrapper>
    );
};

const MyPostWrapper = styled.div`

`

const Posts = styled.div`

`
