import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './Auth';

export class Nav extends Component {
    render = () => {
        return (
            <UserContext.Consumer>
                {(user) => {
                    console.log(user);
                    return (
                        <nav>
                            <div className="nav-brand">
                                <NavLink to="/">
                                    <h1>Noobs Welcome</h1>
                                </NavLink>
                            </div>
                            <div className="nav-content">
                                {user && (
                                    <>
                                        {/* <NavLink to="/add">Add Endpoint</NavLink> */}
                                        <div className="divider" />
                                        <NavLink to="/logout">logout</NavLink>
                                    </>
                                )}
                                {!user && (
                                    <>
                                        <NavLink to="/login">Login</NavLink>
                                        <NavLink to="/register">
                                            Register
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </nav>
                    );
                }}
            </UserContext.Consumer>
        );
    };
}
