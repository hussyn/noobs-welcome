import React from 'react';

export default function Post({ post }) {
    return (
        <div>
            <p>{post.username}</p>
            <p>{post.content}</p>
        </div>
    );
}
