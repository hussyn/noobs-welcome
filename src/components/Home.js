import React, { Component } from 'react';
import { FirebaseContext } from './Firebase';
import Posts from './Posts';
export class Home extends Component {
    loggedIn = false;

    //TODO: Connect to posts!
    posts = [
        {
            id: 1,
            username: 'jamesqquick',
            content: 'Imposter syndrome is a joke!'
        }
    ];

    render = () => {
        return (
            <FirebaseContext.Consumer>
                {(firebase) => {
                    return (
                        <>
                            <h1>Welcome to Noobs Welcome!</h1>
                            <Posts posts={this.posts} />
                        </>
                    );
                }}
            </FirebaseContext.Consumer>
        );
    };
}
