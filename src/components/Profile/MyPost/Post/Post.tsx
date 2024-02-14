import React from 'react';
import styled from "styled-components";
import {Button} from "antd";
type PostType = {
    message: string
}
export const Post = (props: PostType) => {
    return (
        <PostWrapper>
            <img
                src="https://conceptdraw.com/a1709c3/p1/preview/640/pict--post-post-and-mail---vector-stencils-library.png--diagram-flowchart-example.png"
                alt=""/>
            {props.message}
            <div>
                <Button onClick={() => {
                    console.log(props.message)
                }}><span>like </span></Button>
                <Button><span>dislike</span></Button>
            </div>
        </PostWrapper>
    );
};

const PostWrapper = styled.div`
    img {
        width: 50px;
        height: 50px;
        border-radius: 30px;
    }
`