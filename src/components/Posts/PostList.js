import React from 'react';
import Post from './Post';

export default function Posts({ posts }) {
    return (
        <div>
            <h3>Posts!</h3>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
