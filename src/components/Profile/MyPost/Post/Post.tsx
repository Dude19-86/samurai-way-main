import React from 'react';
import styled from "styled-components";
import {Button, Flex, Image, Table} from "antd";
import image from '../../../../essets/image/post.jpg'
import {DislikeFilled, LikeFilled, LikeTwoTone} from "@ant-design/icons";

type PostType = {
    message: string
    likesCount: string
}

export const Post = ({message, likesCount, ...restProps}: PostType) => {

    // const dataSource = [
    //     {
    //         key: '1',
    //         messages: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         messages: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ];
    //
    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'messages',
    //         key: 'messages',
    //     },
    //     {
    //         title: 'Age',
    //         dataIndex: 'age',
    //         key: 'age',
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ];

    return (
        <PostWrapper>
            <div>
                <Image style={{width: '70px'}} src={image} alt=""/>
            </div>
            <span>{message} </span>
            <div><span style={{ paddingLeft: '10px'}}>like {likesCount}</span></div>

            <div>
                {/*<Table dataSource={dataSource} columns={columns}/>;*/}
                <Button shape={"circle"} type={"primary"}><LikeFilled rev={undefined}/></Button>
                <Button shape={"circle"} type={"primary"}><DislikeFilled rev={undefined}/></Button>
            </div>
        </PostWrapper>
    );
};

const PostWrapper = styled.div`
    div img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        //object-fit: cover;
    }

    div:last-child {
        padding: 10px;
    }

    div:first-child {
        padding: 10px;
        display: inline-block;
    }
`

