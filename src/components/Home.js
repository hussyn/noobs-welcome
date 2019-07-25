import React, { Component } from 'react';
import { FirebaseContext } from './Firebase';
import { NavLink } from 'react-router-dom';
export class Home extends Component {
    loggedIn = false;

    render = () => {
        return (
            <FirebaseContext.Consumer>
                {(firebase) => {
                    console.log(firebase);
                    return <div>Welcome to Noobs Welcome!</div>;
                }}
            </FirebaseContext.Consumer>
        );
    };
}
