import React from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PostDataType} from "../../redux/state";

type MyPostType = {
    postData: PostDataType[]
}

export const MyPost = ({postData, ...restProps}: MyPostType) => {
    return (
        <MyPostWrapper>
            <Title>My Posts</Title>
            <FormWrapper>
                <div><TextArea style={{width: '200px', height: '60px'}}></TextArea></div>
                <div><Button type={"primary"}>Add Post</Button></div>
            </FormWrapper>
            <Posts>
                {postData.map(e => {
                    return (
                        <Post key={e.id} message={e.messages} likesCount={e.likesCount}/>
                    )
                })}
                {/*<Post message={'Hi, how are you?'} likesCount={'0'}/>*/}
                {/*<Post message={'It\'s my first post'} likesCount={'23'}/>*/}
            </Posts>
        </MyPostWrapper>
    );
};

const MyPostWrapper = styled.div`

`

const Title = styled.h3`
    padding: 10px;
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
`

const Posts = styled.div`
    margin-top: 10px;
`


