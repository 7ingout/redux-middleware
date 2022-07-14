import React from 'react';
import PostContainer from '../components/PostContainer';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const {id} = useParams();
    return (
        <PostContainer postId={parseInt(id)}/>
    );
};

export default PostPage;