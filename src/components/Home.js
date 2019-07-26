import React, { Component } from 'react';
import PostList from './Posts/PostList';
import { NewPostForm } from './Posts/NewPost';
import { UserContext } from './Auth';
export class Home extends Component {
    loggedIn = false;

    
    render = () => {
        return (
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <>
                            {user && <NewPostForm />}
                            <PostList />
                        </>
                    );
                }}
            </UserContext.Consumer>
        );
    };
}
