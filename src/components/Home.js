import React, { Component } from 'react';
import PostList from './Posts/PostList';
import { NewPostForm } from './Posts/NewPost';
import { UserContext } from './Auth';
export class Home extends Component {
    loggedIn = false;

    //TODO: Connect to posts!
    posts = [
        {
            id: 1,
            username: 'jamesqquick',
            story:
                'On my planet (planet conehead) almost everyone is an advanced brain to type without using a keyboard as all coneheads are able to use their advanced brain to type without using a keyboard',
            createdAt: '8:00am',
            image:
                'https://images-na.ssl-images-amazon.com/images/I/71wiruqIZ9L._SY606_.jpg'
        }
    ];

    render = () => {
        return (
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <>
                            {user && <NewPostForm />}
                            <PostList posts={this.posts} />
                        </>
                    );
                }}
            </UserContext.Consumer>
        );
    };
}
