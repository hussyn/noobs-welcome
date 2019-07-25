import React, { Component } from 'react';
import { FirebaseContext } from './Firebase';
export class Home extends Component {
    loggedIn = false;

    render = () => {
        return (
            <FirebaseContext.Consumer>
                {(firebase) => {
                    return <div>Welcome to Noobs Welcome!</div>;
                }}
            </FirebaseContext.Consumer>
        );
    };
}
